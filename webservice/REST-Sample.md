### A sample use case

Lets assume we want to process data from two separate data sources, DEVICE-A & DEVICE-B. The devices are pushing
messages to a single kafa topic *kafa-topic-T1*. Lets say, we also have parsers (that implement the iotas 
*Parser* interface) for parsing the messages from these devices bundled into jar files.
 
1. First we need to add the data source details via the datasource create API.
   * POST /api/v1/catalog/datasources
 
     ```
     {
      "name": "DEVICE-A",
      "description": "An example device",
      "tags": "tag1",
      "type": "DEVICE",
      "typeConfig": "{\"id\": "D1", \"version\":1}"
     }
     ```
     
   * POST /api/v1/catalog/datasources
 
     ```
     {
      "name": "DEVICE-B",
      "description": "Another device",
      "tags": "tag2",
      "type": "DEVICE",
      "typeConfig": "{\"id\": "D2", \"version\":1}"
     }
     ```
  The `id` and `version` fields are assumed to be always present in the message header. This is used to uniquely identify
  the datasource that produced the message in case there are multiple datasources publishing to same endpoint.

2. Next we need to upload parser jars that know how to parse the data from these devices and produce a `Map<String, Object>` 
   which is passed to downstream systems for further processing.
   * Upload parser for DEVICE-A (a sample ParserInfo.json is given in the parser create API section)
   
     ```
     curl -X POST -v -F parserJar=@DEVICE-A-parser.jar -F parserInfo=@ParserInfo.json http://hostname/api/v1/catalog/parsers
     ```
   * Upload parser for DEVICE-B 
   
     ```
     curl -X POST -v -F parserJar=@DEVICE-B-parser.jar -F parserInfo=@ParserInfo.json http://hostname/api/v1/catalog/parsers
     ```
   
3. Final step is to create a data feed that represents the stream of data generated by a data source.
  * POST /api/v1/catalog/feeds
  ```
  {
    "id": <the id in POST response while creating DEVICE-A>,
    "name": "feed1",
    "description": "test feed",
    "tags": "tag1",
    "parserId": <the parserId in POST response while creating DEVICE-A-parser>,
    "type": "KAFKA"
  }
  ```

  * POST /api/v1/catalog/feeds
  ```
  {
    "id": <the id in POST response while creating DEVICE-B>,
    "name": "feed2",
    "description": "test feed",
    "tags": "tag1",
    "parserId": <the parserId in POST response while creating DEVICE-B-parser>,
    "type": "KAFKA"
  }
  ```
  The *type* specifies the type of storage layer from where the data feed is 
  received. For e.g. KAFKA. It is possible that multiple devices are pushing 
  the data via the same end point. If so, the data source type specifc field 
  values will be used to distingush the data source. For e.g, a message with 
  deviceId, version pair `<D1, 1>` would be from `DEVICE-A` and hence would 
  map to `feed1` and be parsed by `DEVICE-A-parser`.
  
  Also note that a `feed` represents the stream of data produced by a single `datasource`. However the same `datasource` can 
  be producing multiple `feeds` which can be parsed by same or different `parsers`.
  