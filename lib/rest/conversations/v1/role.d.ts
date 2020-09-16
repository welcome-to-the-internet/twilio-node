/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { SerializableClass } from '../../../interfaces';

type RoleRoleType = 'conversation'|'service';

/**
 * Initialize the RoleList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 */
declare function RoleList(version: V1): RoleListInstance;

/**
 * Options to pass to update
 *
 * @property permission - A permission the role should have
 */
interface RoleInstanceUpdateOptions {
  permission: string | string[];
}

interface RoleListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): RoleContext;
  /**
   * create a RoleInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: RoleListInstanceCreateOptions, callback?: (error: Error | null, item: RoleInstance) => any): Promise<RoleInstance>;
  /**
   * Streams RoleInstance records from the API.
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
  each(callback?: (item: RoleInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams RoleInstance records from the API.
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
  each(opts?: RoleListInstanceEachOptions, callback?: (item: RoleInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a role
   *
   * @param sid - The SID of the Role resource to fetch
   */
  get(sid: string): RoleContext;
  /**
   * Retrieve a single target page of RoleInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: RolePage) => any): Promise<RolePage>;
  /**
   * Retrieve a single target page of RoleInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: RolePage) => any): Promise<RolePage>;
  /**
   * Lists RoleInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: RoleInstance[]) => any): Promise<RoleInstance[]>;
  /**
   * Lists RoleInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: RoleListInstanceOptions, callback?: (error: Error | null, items: RoleInstance[]) => any): Promise<RoleInstance[]>;
  /**
   * Retrieve a single page of RoleInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: RolePage) => any): Promise<RolePage>;
  /**
   * Retrieve a single page of RoleInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: RoleListInstancePageOptions, callback?: (error: Error | null, items: RolePage) => any): Promise<RolePage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property friendlyName - A string to describe the new resource
 * @property permission - A permission the role should have
 * @property type - The type of role
 */
interface RoleListInstanceCreateOptions {
  friendlyName: string;
  permission: string | string[];
  type: RoleRoleType;
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
interface RoleListInstanceEachOptions {
  callback?: (item: RoleInstance, done: (err?: Error) => void) => void;
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
interface RoleListInstanceOptions {
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
interface RoleListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface RolePayload extends RoleResource, Page.TwilioResponsePayload {
}

interface RoleResource {
  account_sid: string;
  chat_service_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  permissions: string[];
  sid: string;
  type: RoleRoleType;
  url: string;
}

interface RoleSolution {
}


declare class RoleContext {
  /**
   * Initialize the RoleContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param sid - The SID of the Role resource to fetch
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a RoleInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: RoleInstance) => any): Promise<RoleInstance>;
  /**
   * remove a RoleInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: RoleInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a RoleInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: RoleInstanceUpdateOptions, callback?: (error: Error | null, items: RoleInstance) => any): Promise<RoleInstance>;
}


declare class RoleInstance extends SerializableClass {
  /**
   * Initialize the RoleContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The SID of the Role resource to fetch
   */
  constructor(version: V1, payload: RolePayload, sid: string);

  private _proxy: RoleContext;
  accountSid: string;
  chatServiceSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a RoleInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: RoleInstance) => any): Promise<RoleInstance>;
  friendlyName: string;
  permissions: string[];
  /**
   * remove a RoleInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: RoleInstance) => any): Promise<boolean>;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  type: RoleRoleType;
  /**
   * update a RoleInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: RoleInstanceUpdateOptions, callback?: (error: Error | null, items: RoleInstance) => any): Promise<RoleInstance>;
  url: string;
}


declare class RolePage extends Page<V1, RolePayload, RoleResource, RoleInstance> {
  /**
   * Initialize the RolePage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: RoleSolution);

  /**
   * Build an instance of RoleInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RolePayload): RoleInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { RoleContext, RoleInstance, RoleInstanceUpdateOptions, RoleList, RoleListInstance, RoleListInstanceCreateOptions, RoleListInstanceEachOptions, RoleListInstanceOptions, RoleListInstancePageOptions, RolePage, RolePayload, RoleResource, RoleRoleType, RoleSolution }
