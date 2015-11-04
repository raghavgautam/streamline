#!/usr/bin/env bash
curl -X POST -i -F parserJar=@../parsers/target/parsers-0.1-SNAPSHOT.jar -F parserInfo='{"parserName":"NestParser","className":"com.hortonworks.iotas.parsers.nest.NestParser","version":0}' -F schemaFromParserJar=true http://localhost:8080/api/v1/catalog/parsers &&\
curl -X POST http://localhost:8080/api/v1/catalog/feeds --data @datafeed -H "Content-Type: application/json" &&\
curl -X POST http://localhost:8080/api/v1/catalog/datasources --data @datasource -H "Content-Type: application/json" &&\
curl -X POST http://localhost:8080/api/v1/catalog/datastreams --data @datastream -H "Content-Type: application/json" &&\
curl -X POST http://localhost:8080/api/v1/catalog/notifiers --data @console_notifier -H "Content-Type: application/json" 