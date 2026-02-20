// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Me extends APIResource {
  /**
   * Get the current authenticated user.
   */
  retrieve(options?: RequestOptions): APIPromise<MeRetrieveResponse> {
    return this._client.get('/users/me', options);
  }

  /**
   * Update the current authenticated user.
   */
  update(
    body: MeUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MeUpdateResponse> {
    return this._client.patch('/users/me', { body, ...options });
  }
}

export interface MeRetrieveResponse {
  /**
   * The current authenticated user.
   */
  user: MeRetrieveResponse.User;
}

export namespace MeRetrieveResponse {
  /**
   * The current authenticated user.
   */
  export interface User {
    /**
     * The unique identifier of the user.
     */
    id: string;

    /**
     * The time the user was created.
     */
    created_at: unknown;

    /**
     * The email address of the user.
     */
    email: string;

    /**
     * The first name of the user.
     */
    first_name: string | null;

    /**
     * Whether the user has completed the onboarding tutorial.
     */
    has_completed_onboarding: boolean;

    /**
     * The last name of the user.
     */
    last_name: string | null;

    /**
     * The ID of the organization the user belongs to.
     */
    organization_id: string;

    /**
     * The time the user was last updated.
     */
    updated_at: unknown;
  }
}

export interface MeUpdateResponse {
  /**
   * The current authenticated user.
   */
  user: MeUpdateResponse.User;
}

export namespace MeUpdateResponse {
  /**
   * The current authenticated user.
   */
  export interface User {
    /**
     * The unique identifier of the user.
     */
    id: string;

    /**
     * The time the user was created.
     */
    created_at: unknown;

    /**
     * The email address of the user.
     */
    email: string;

    /**
     * The first name of the user.
     */
    first_name: string | null;

    /**
     * Whether the user has completed the onboarding tutorial.
     */
    has_completed_onboarding: boolean;

    /**
     * The last name of the user.
     */
    last_name: string | null;

    /**
     * The ID of the organization the user belongs to.
     */
    organization_id: string;

    /**
     * The time the user was last updated.
     */
    updated_at: unknown;
  }
}

export interface MeUpdateParams {
  has_completed_onboarding?: boolean;
}

export declare namespace Me {
  export {
    type MeRetrieveResponse as MeRetrieveResponse,
    type MeUpdateResponse as MeUpdateResponse,
    type MeUpdateParams as MeUpdateParams,
  };
}
