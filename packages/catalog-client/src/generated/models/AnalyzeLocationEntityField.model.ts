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

export interface AnalyzeLocationEntityField {
  /**
   * A text to show to the user to inform about the choices made. Like, it could say \"Found a CODEOWNERS file that covers this target, so we suggest leaving this field empty; which would currently make it owned by X\" where X is taken from the codeowners file.
   */
  description: string;
  value: string | null;
  /**
   * The outcome of the analysis for this particular field
   */
  state: AnalyzeLocationEntityFieldStateEnum;
  /**
   * e.g. \"spec.owner\"? The frontend needs to know how to \"inject\" the field into the entity again if the user wants to change it
   */
  field: string;
}

export type AnalyzeLocationEntityFieldStateEnum =
  | 'analysisSuggestedValue'
  | 'analysisSuggestedNoValue'
  | 'needsUserInput';
