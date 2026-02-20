// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Voices extends APIResource {
  /**
   * Get a single voice by ID.
   */
  retrieve(
    id: string,
    query: VoiceRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<VoiceRetrieveResponse> {
    return this._client.get(path`/voices/${id}`, { query, ...options });
  }

  /**
   * Get the list of voices available for the call. Supports Cartesia, ElevenLabs,
   * Inworld voices.
   */
  list(options?: RequestOptions): APIPromise<VoiceListResponse> {
    return this._client.get('/voices', options);
  }

  /**
   * Generate a voice preview audio sample for a given voice ID.
   */
  preview(body: VoicePreviewParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/voices/preview', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface VoiceRetrieveResponse {
  voice: VoiceRetrieveResponse.Voice;
}

export namespace VoiceRetrieveResponse {
  export interface Voice {
    id: string;

    name: string;

    description?: string;
  }
}

export interface VoiceListResponse {
  voices: Array<VoiceListResponse.Voice>;
}

export namespace VoiceListResponse {
  export interface Voice {
    /**
     * The ID of the voice.
     */
    id: string;

    /**
     * The description of the voice.
     */
    description: string;

    /**
     * The language of the voice.
     */
    language: 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt' | 'ru' | 'zh';

    /**
     * The name of the voice.
     */
    name: string;

    /**
     * The provider of the voice.
     */
    provider: 'cartesia' | 'elevenlabs';
  }
}

export interface VoiceRetrieveParams {
  provider: 'cartesia' | 'elevenlabs';
}

export interface VoicePreviewParams {
  /**
   * The provider to use for the preview.
   */
  provider: 'cartesia' | 'elevenlabs';

  /**
   * The voice ID to generate a preview for.
   */
  voiceId: string;

  /**
   * The text to generate a preview for.
   */
  text?: string;
}

export declare namespace Voices {
  export {
    type VoiceRetrieveResponse as VoiceRetrieveResponse,
    type VoiceListResponse as VoiceListResponse,
    type VoiceRetrieveParams as VoiceRetrieveParams,
    type VoicePreviewParams as VoicePreviewParams,
  };
}
