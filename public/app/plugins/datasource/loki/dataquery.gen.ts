// Code generated - EDITING IS FUTILE. DO NOT EDIT.
//
// Generated by:
//     public/app/plugins/gen.go
// Using jennies:
//     TSTypesJenny
//     PluginTSTypesJenny
//
// Run 'make gen-cue' from repository root to regenerate.

import * as common from '@grafana/schema';

export enum QueryEditorMode {
  Builder = 'builder',
  Code = 'code',
}

export enum LokiQueryType {
  Instant = 'instant',
  Range = 'range',
  Stream = 'stream',
}

export enum SupportingQueryType {
  DataSample = 'dataSample',
  InfiniteScroll = 'infiniteScroll',
  LogsSample = 'logsSample',
  LogsVolume = 'logsVolume',
}

export enum LokiQueryDirection {
  Backward = 'backward',
  Forward = 'forward',
}

export interface Loki extends common.DataQuery {
  editorMode?: QueryEditorMode;
  /**
   * The LogQL query.
   */
  expr: string;
  /**
   * @deprecated, now use queryType.
   */
  instant?: boolean;
  /**
   * Used to override the name of the series.
   */
  legendFormat?: string;
  /**
   * Used to limit the number of log rows returned.
   */
  maxLines?: number;
  /**
   * @deprecated, now use queryType.
   */
  range?: boolean;
  /**
   * @deprecated, now use step.
   */
  resolution?: number;
  /**
   * Used to set step value for range queries.
   */
  step?: string;
}
