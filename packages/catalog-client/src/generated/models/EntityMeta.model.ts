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

import { EntityLink } from '../models/EntityLink.model';

/**
 * Metadata fields common to all versions/kinds of entity.
 */
export interface EntityMeta {
  [key: string]: any;
  /**
   * A list of external hyperlinks related to the entity.
   */
  links?: Array<EntityLink>;
  /**
   * A list of single-valued strings, to for example classify catalog entities in various ways.
   */
  tags?: Array<string>;
  /**
   * Construct a type with a set of properties K of type T
   */
  annotations?: { [key: string]: string };
  /**
   * Construct a type with a set of properties K of type T
   */
  labels?: { [key: string]: string };
  /**
   * A short (typically relatively few words, on one line) description of the entity.
   */
  description?: string;
  /**
   * A display name of the entity, to be presented in user interfaces instead of the `name` property above, when available. This field is sometimes useful when the `name` is cumbersome or ends up being perceived as overly technical. The title generally does not have as stringent format requirements on it, so it may contain special characters and be more explanatory. Do keep it very short though, and avoid situations where a title can be confused with the name of another entity, or where two entities share a title. Note that this is only for display purposes, and may be ignored by some parts of the code. Entity references still always make use of the `name` property, not the title.
   */
  title?: string;
  /**
   * The namespace that the entity belongs to.
   */
  namespace?: string;
  /**
   * The name of the entity. Must be unique within the catalog at any given point in time, for any given namespace + kind pair. This value is part of the technical identifier of the entity, and as such it will appear in URLs, database tables, entity references, and similar. It is subject to restrictions regarding what characters are allowed. If you want to use a different, more human readable string with fewer restrictions on it in user interfaces, see the `title` field below.
   */
  name: string;
  /**
   * An opaque string that changes for each update operation to any part of the entity, including metadata. This field can not be set by the user at creation time, and the server will reject an attempt to do so. The field will be populated in read operations. The field can (optionally) be specified when performing update or delete operations, and the server will then reject the operation if it does not match the current stored value.
   */
  etag?: string;
  /**
   * A globally unique ID for the entity. This field can not be set by the user at creation time, and the server will reject an attempt to do so. The field will be populated in read operations. The field can (optionally) be specified when performing update or delete operations, but the server is free to reject requests that do so in such a way that it breaks semantics.
   */
  uid?: string;
}
