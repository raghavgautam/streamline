/**
  * Copyright 2017 Hortonworks.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *   http://www.apache.org/licenses/LICENSE-2.0
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
**/

const baseUrl = "/api/v1/catalog/";
const pageSize = 25;
const ItemTypes = {
  ComponentNodes: 'box',
  Nodes: 'node'
};
const notifyTextLimit = 90;
const toastOpt = {
  timeOut: 0,
  closeButton: true,
  tapToDismiss: false,
  extendedTimeOut: 0
};
const PieChartColor = ["#006ea0", "#77b0bd", "#b7cfdb", "#9dd1e9"];
let deleteNodeIdArr = [];

const deployStatusText = {
  DEPLOYING_TOPOLOGY : 'Deploying Topology',
  TOPOLOGY_STATE_EXTRA_JARS_SETUP : 'Topology State Extra Jars Setup',
  TOPOLOGY_STATE_CLUSTER_ARTIFACTS_SETUP : 'Topology State Cluster Artifacts Setup',
  TOPOLOGY_STATE_DEPLOYED : 'Topology State Deployed',
  TOPOLOGY_STATE_SUSPENDED : 'Topology State Suspended',
  TOPOLOGY_STATE_DEPLOYMENT_FAILED : 'Topology State Deployment Failed'
};

const colorOptions = [
  {value: '#8261be', label: 'purple'},
  {value: '#ce761b', label: 'orange'},
  {value: '#dcaa15', label: 'yellow'},
  {value: '#4c979f', label: 'blue'},
  {value: '#529e4c', label: 'green'},
  {value: '#9e8a4c', label: 'brown'},
  {value: '#9e4c75', label: 'pink'},
  {value: '#000000', label: 'black'}
];

const iconOptions = [
  {value: 'gears'},
  {value: 'sitemap'},
  {value: 'file-code-o'},
  {value: 'code'},
  {value: 'shield'},
  {value: 'bell'},
  {value: 'file'},
  {value: 'lock'},
  {value: 'key'},
  {value: 'cubes'},
  {value: 'globe'},
  {value: 'pencil'},
  {value: 'eye'}
];

const rolePriorities = [
  {name: "ROLE_SECURITY_ADMIN", priority: 1},
  {name: "ROLE_TOPOLOGY_ADMIN", priority: 2},
  {name: "ROLE_TOPOLOGY_COMPONENT_BUNDLE_USER", priority: 3},
  {name: "ROLE_TOPOLOGY_COMPONENT_BUNDLE_ADMIN", priority: 2},
  {name: "ROLE_CLUSTER_ADMIN", priority: 2},
  {name: "ROLE_FILE_ADMIN", priority: 2},
  {name: "ROLE_UDF_ADMIN", priority: 2},
  {name: "ROLE_NOTIFIER_ADMIN", priority: 2},
  {name: "ROLE_NOTIFICATION_USER", priority: 3},
  {name: "ROLE_SCHEMA_USER", priority: 3},
  {name: "ROLE_SCHEMA_ADMIN", priority: 2}
];

const menuName = {
  APPLICATION: 'topology',
  DASHBOARD: 'dashboard',
  SCHEMA_REGISTRY: 'schemaRegistry',
  MODEL_REGISTRY: 'modelRegistry',
  UDF: 'udf',
  NOTIFIER: 'notifier',
  CUSTOM_PROCESSOR: 'customprocessor',
  SERVICE_POOL: 'servicepool',
  ENVIRONMENT: 'environments',
  AUTHORIZER: 'authorizer',
  COMPONENT_DEFINITIONS: 'componentDefinitions'
};
const accessCapabilities = {
  APPLICATION: 'Applications',
  SERVICE_POOL: 'Service Pool',
  ENVIRONMENT: 'Environments',
  USER: 'Users'
};
export {
  baseUrl,
  pageSize,
  ItemTypes,
  notifyTextLimit,
  toastOpt,
  PieChartColor,
  deleteNodeIdArr,
  deployStatusText,
  colorOptions,
  iconOptions,
  rolePriorities,
  menuName,
  accessCapabilities
};
