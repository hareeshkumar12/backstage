/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Entity } from '../models/Entity.model';
import { LocationSpec } from '../models/LocationSpec.model';

/**
 * If the folder pointed to already contained catalog info yaml files, they are read and emitted like this so that the frontend can inform the user that it located them and can make sure to register them as well if they weren't already
 */
export interface AnalyzeLocationExistingEntity {
  entity: Entity;
  isRegistered: boolean;
  location: LocationSpec;
}
