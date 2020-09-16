/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import { FunctionVersionContentList } from './functionVersion/functionVersionContent';
import { FunctionVersionContentListInstance } from './functionVersion/functionVersionContent';
import { SerializableClass } from '../../../../../interfaces';

type FunctionVersionVisibility = 'public'|'private'|'protected';

/**
 * Initialize the FunctionVersionList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param serviceSid - The SID of the Service that the Function Version resource is associated with
 * @param functionSid - The SID of the Function resource that is the parent of the Function Version resource
 */
declare function FunctionVersionList(version: V1, serviceSid: string, functionSid: string): FunctionVersionListInstance;

interface FunctionVersionListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): FunctionVersionContext;
  /**
   * Streams FunctionVersionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Function to process each record
   */
  each(callback?: (item: FunctionVersionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams FunctionVersionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: FunctionVersionListInstanceEachOptions, callback?: (item: FunctionVersionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a function_version
   *
   * @param sid - The SID that identifies the Function Version resource to fetch
   */
  get(sid: string): FunctionVersionContext;
  /**
   * Retrieve a single target page of FunctionVersionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: FunctionVersionPage) => any): Promise<FunctionVersionPage>;
  /**
   * Retrieve a single target page of FunctionVersionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: FunctionVersionPage) => any): Promise<FunctionVersionPage>;
  /**
   * Lists FunctionVersionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: FunctionVersionInstance[]) => any): Promise<FunctionVersionInstance[]>;
  /**
   * Lists FunctionVersionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: FunctionVersionListInstanceOptions, callback?: (error: Error | null, items: FunctionVersionInstance[]) => any): Promise<FunctionVersionInstance[]>;
  /**
   * Retrieve a single page of FunctionVersionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: FunctionVersionPage) => any): Promise<FunctionVersionPage>;
  /**
   * Retrieve a single page of FunctionVersionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: FunctionVersionListInstancePageOptions, callback?: (error: Error | null, items: FunctionVersionPage) => any): Promise<FunctionVersionPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface FunctionVersionListInstanceEachOptions {
  callback?: (item: FunctionVersionInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface FunctionVersionListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface FunctionVersionListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface FunctionVersionPayload extends FunctionVersionResource, Page.TwilioResponsePayload {
}

interface FunctionVersionResource {
  account_sid: string;
  date_created: Date;
  function_sid: string;
  links: string;
  path: string;
  service_sid: string;
  sid: string;
  url: string;
  visibility: FunctionVersionVisibility;
}

interface FunctionVersionSolution {
  functionSid?: string;
  serviceSid?: string;
}


declare class FunctionVersionContext {
  /**
   * Initialize the FunctionVersionContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param serviceSid - The SID of the Service to fetch the Function Version resource from
   * @param functionSid - The SID of the function that is the parent of the Function Version resource to fetch
   * @param sid - The SID that identifies the Function Version resource to fetch
   */
  constructor(version: V1, serviceSid: string, functionSid: string, sid: string);

  /**
   * fetch a FunctionVersionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FunctionVersionInstance) => any): Promise<FunctionVersionInstance>;
  functionVersionContent: FunctionVersionContentListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class FunctionVersionInstance extends SerializableClass {
  /**
   * Initialize the FunctionVersionContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The SID of the Service that the Function Version resource is associated with
   * @param functionSid - The SID of the Function resource that is the parent of the Function Version resource
   * @param sid - The SID that identifies the Function Version resource to fetch
   */
  constructor(version: V1, payload: FunctionVersionPayload, serviceSid: string, functionSid: string, sid: string);

  private _proxy: FunctionVersionContext;
  accountSid: string;
  dateCreated: Date;
  /**
   * fetch a FunctionVersionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FunctionVersionInstance) => any): Promise<FunctionVersionInstance>;
  functionSid: string;
  /**
   * Access the functionVersionContent
   */
  functionVersionContent(): FunctionVersionContentListInstance;
  links: string;
  path: string;
  serviceSid: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
  visibility: FunctionVersionVisibility;
}


declare class FunctionVersionPage extends Page<V1, FunctionVersionPayload, FunctionVersionResource, FunctionVersionInstance> {
  /**
   * Initialize the FunctionVersionPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: FunctionVersionSolution);

  /**
   * Build an instance of FunctionVersionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FunctionVersionPayload): FunctionVersionInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { FunctionVersionContext, FunctionVersionInstance, FunctionVersionList, FunctionVersionListInstance, FunctionVersionListInstanceEachOptions, FunctionVersionListInstanceOptions, FunctionVersionListInstancePageOptions, FunctionVersionPage, FunctionVersionPayload, FunctionVersionResource, FunctionVersionSolution, FunctionVersionVisibility }
