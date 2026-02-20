// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Assistants extends APIResource {
  create(body: AssistantCreateParams, options?: RequestOptions): APIPromise<AssistantCreateResponse> {
    return this._client.post('/assistants', { body, ...options });
  }

  retrieve(id: string, options?: RequestOptions): APIPromise<AssistantRetrieveResponse> {
    return this._client.get(path`/assistants/${id}`, options);
  }

  update(
    id: string,
    body: AssistantUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AssistantUpdateResponse> {
    return this._client.patch(path`/assistants/${id}`, { body, ...options });
  }

  list(options?: RequestOptions): APIPromise<AssistantListResponse> {
    return this._client.get('/assistants', options);
  }

  delete(id: string, options?: RequestOptions): APIPromise<AssistantDeleteResponse> {
    return this._client.delete(path`/assistants/${id}`, options);
  }
}

export interface AssistantCreateResponse {
  assistant: AssistantCreateResponse.Assistant;
}

export namespace AssistantCreateResponse {
  export interface Assistant {
    id: string;

    /**
     * The background sound to play during the call. Useful to give the impression that
     * your AI agent is in an office.
     */
    background_sound: 'audio/office.ogg' | null;

    calendly: Assistant.Calendly | null;

    /**
     * Configuration for call retry behavior including time windows, delays, and max
     * iterations. If not provided, defaults will be used.
     */
    call_retry_config: Assistant.CallRetryConfig | null;

    created_at: unknown;

    end_of_call_sentence: string | null;

    first_sentence: string | null;

    /**
     * Delay in milliseconds before speaking the first sentence. Default: 400.
     */
    first_sentence_delay_ms: number;

    first_sentence_mode: 'generated' | 'static' | 'none';

    /**
     * Enable IVR navigation tools. When enabled, the assistant can send DTMF tones and
     * skip turns to navigate phone menus.
     */
    ivr_navigation_enabled: boolean;

    llm_model: Assistant.UnionMember0 | Assistant.UnionMember1;

    /**
     * The maximum duration of the call in seconds. This is the maximum time the call
     * will be allowed to run.
     */
    max_call_duration_secs: number;

    name: string;

    organization_id: string;

    prompt: string;

    /**
     * The structured output config to use for the call. This is used to extract the
     * data from the call (like email, name, company name, etc.).
     */
    structured_output_config: Array<Assistant.StructuredOutputConfig> | null;

    /**
     * Phone number to transfer calls to when users request to speak to a human agent.
     */
    transfer_phone_number: string | null;

    updated_at: unknown;

    voice: Assistant.Voice | null;

    /**
     * If set, when voicemail is detected the agent will speak this message then hang
     * up; if null, hang up immediately.
     */
    voicemail_message: string | null;

    /**
     * The webhook URL to call when the call is completed.
     */
    webhook_url: string | null;

    faq_items?: Array<Assistant.FaqItem>;

    pending_faq_count?: number;
  }

  export namespace Assistant {
    export interface Calendly {
      /**
       * The connection ID representing the link between your Calendly account and Revox.
       */
      connection_id: string;

      /**
       * The event type ID representing the event type to schedule. (eg:
       * https://api.calendly.com/event_types/b2330295-2a91-4a1d-bb73-99e7707663d5)
       */
      event_type_id: string;
    }

    /**
     * Configuration for call retry behavior including time windows, delays, and max
     * iterations. If not provided, defaults will be used.
     */
    export interface CallRetryConfig {
      calling_windows: Array<CallRetryConfig.CallingWindow>;

      /**
       * Maximum number of call retry attempts. Default: 3.
       */
      max_retry_attempts: number;

      /**
       * Optional IANA timezone identifier to override the automatic timezone detection
       * from phone number. If not provided, timezone is determined from the recipient's
       * phone number country code. Examples: 'America/New_York', 'Europe/Paris'.
       */
      timezone?: string | null;
    }

    export namespace CallRetryConfig {
      export interface CallingWindow {
        /**
         * End time for the calling window in the recipient's timezone (or
         * timezone_override if provided). Format: 'HH:mm' (24-hour) or 'H:mma' (12-hour).
         * Examples: '17:00', '6pm'. Default: '18:00'.
         */
        calling_window_end_time: string;

        /**
         * Start time for the calling window in the recipient's timezone (or
         * timezone_override if provided). Format: 'HH:mm' (24-hour) or 'H:mma' (12-hour).
         * Examples: '09:00', '10am'. Default: '10:00'.
         */
        calling_window_start_time: string;

        /**
         * Delay between retry attempts in seconds. Default: 7200 (2 hours).
         */
        retry_delay_seconds: number;
      }
    }

    export interface UnionMember0 {
      name: 'gpt-4.1' | 'ministral-3-8b-instruct';

      type: 'dedicated-instance';
    }

    export interface UnionMember1 {
      /**
       * The model ID to use from OpenRouter. eg: openai/gpt-4.1
       */
      openrouter_model_id: string;

      /**
       * The provider to use from OpenRouter. eg: nebius, openai, azure, etc.
       */
      openrouter_provider: string;

      /**
       * Use a model from OpenRouter.
       */
      type: 'openrouter';
    }

    export interface StructuredOutputConfig {
      name: string;

      required: boolean;

      type: 'string' | 'number' | 'boolean' | 'enum' | 'date' | 'datetime';

      description?: string;

      enum_options?: Array<string>;
    }

    export interface Voice {
      /**
       * The ID of the voice.
       */
      id: string;

      /**
       * The provider of the voice.
       */
      provider: 'cartesia' | 'elevenlabs';

      /**
       * The speed of the voice. Range depends on provider: Cartesia 0.6–1.5, ElevenLabs
       * 0.7–1.2. Default is 1.0.
       */
      speed?: number;
    }

    export interface FaqItem {
      answer: string;

      question: string;

      id?: string;

      needs_human_answer?: boolean;

      source?: 'human' | 'ai';
    }
  }
}

export interface AssistantRetrieveResponse {
  id: string;

  /**
   * The background sound to play during the call. Useful to give the impression that
   * your AI agent is in an office.
   */
  background_sound: 'audio/office.ogg' | null;

  calendly: AssistantRetrieveResponse.Calendly | null;

  /**
   * Configuration for call retry behavior including time windows, delays, and max
   * iterations. If not provided, defaults will be used.
   */
  call_retry_config: AssistantRetrieveResponse.CallRetryConfig | null;

  created_at: unknown;

  end_of_call_sentence: string | null;

  first_sentence: string | null;

  /**
   * Delay in milliseconds before speaking the first sentence. Default: 400.
   */
  first_sentence_delay_ms: number;

  first_sentence_mode: 'generated' | 'static' | 'none';

  /**
   * Enable IVR navigation tools. When enabled, the assistant can send DTMF tones and
   * skip turns to navigate phone menus.
   */
  ivr_navigation_enabled: boolean;

  llm_model: AssistantRetrieveResponse.UnionMember0 | AssistantRetrieveResponse.UnionMember1;

  /**
   * The maximum duration of the call in seconds. This is the maximum time the call
   * will be allowed to run.
   */
  max_call_duration_secs: number;

  name: string;

  organization_id: string;

  prompt: string;

  /**
   * The structured output config to use for the call. This is used to extract the
   * data from the call (like email, name, company name, etc.).
   */
  structured_output_config: Array<AssistantRetrieveResponse.StructuredOutputConfig> | null;

  /**
   * Phone number to transfer calls to when users request to speak to a human agent.
   */
  transfer_phone_number: string | null;

  updated_at: unknown;

  voice: AssistantRetrieveResponse.Voice | null;

  /**
   * If set, when voicemail is detected the agent will speak this message then hang
   * up; if null, hang up immediately.
   */
  voicemail_message: string | null;

  /**
   * The webhook URL to call when the call is completed.
   */
  webhook_url: string | null;

  faq_items?: Array<AssistantRetrieveResponse.FaqItem>;

  pending_faq_count?: number;
}

export namespace AssistantRetrieveResponse {
  export interface Calendly {
    /**
     * The connection ID representing the link between your Calendly account and Revox.
     */
    connection_id: string;

    /**
     * The event type ID representing the event type to schedule. (eg:
     * https://api.calendly.com/event_types/b2330295-2a91-4a1d-bb73-99e7707663d5)
     */
    event_type_id: string;
  }

  /**
   * Configuration for call retry behavior including time windows, delays, and max
   * iterations. If not provided, defaults will be used.
   */
  export interface CallRetryConfig {
    calling_windows: Array<CallRetryConfig.CallingWindow>;

    /**
     * Maximum number of call retry attempts. Default: 3.
     */
    max_retry_attempts: number;

    /**
     * Optional IANA timezone identifier to override the automatic timezone detection
     * from phone number. If not provided, timezone is determined from the recipient's
     * phone number country code. Examples: 'America/New_York', 'Europe/Paris'.
     */
    timezone?: string | null;
  }

  export namespace CallRetryConfig {
    export interface CallingWindow {
      /**
       * End time for the calling window in the recipient's timezone (or
       * timezone_override if provided). Format: 'HH:mm' (24-hour) or 'H:mma' (12-hour).
       * Examples: '17:00', '6pm'. Default: '18:00'.
       */
      calling_window_end_time: string;

      /**
       * Start time for the calling window in the recipient's timezone (or
       * timezone_override if provided). Format: 'HH:mm' (24-hour) or 'H:mma' (12-hour).
       * Examples: '09:00', '10am'. Default: '10:00'.
       */
      calling_window_start_time: string;

      /**
       * Delay between retry attempts in seconds. Default: 7200 (2 hours).
       */
      retry_delay_seconds: number;
    }
  }

  export interface UnionMember0 {
    name: 'gpt-4.1' | 'ministral-3-8b-instruct';

    type: 'dedicated-instance';
  }

  export interface UnionMember1 {
    /**
     * The model ID to use from OpenRouter. eg: openai/gpt-4.1
     */
    openrouter_model_id: string;

    /**
     * The provider to use from OpenRouter. eg: nebius, openai, azure, etc.
     */
    openrouter_provider: string;

    /**
     * Use a model from OpenRouter.
     */
    type: 'openrouter';
  }

  export interface StructuredOutputConfig {
    name: string;

    required: boolean;

    type: 'string' | 'number' | 'boolean' | 'enum' | 'date' | 'datetime';

    description?: string;

    enum_options?: Array<string>;
  }

  export interface Voice {
    /**
     * The ID of the voice.
     */
    id: string;

    /**
     * The provider of the voice.
     */
    provider: 'cartesia' | 'elevenlabs';

    /**
     * The speed of the voice. Range depends on provider: Cartesia 0.6–1.5, ElevenLabs
     * 0.7–1.2. Default is 1.0.
     */
    speed?: number;
  }

  export interface FaqItem {
    answer: string;

    question: string;

    id?: string;

    needs_human_answer?: boolean;

    source?: 'human' | 'ai';
  }
}

export interface AssistantUpdateResponse {
  assistant: AssistantUpdateResponse.Assistant;
}

export namespace AssistantUpdateResponse {
  export interface Assistant {
    id: string;

    /**
     * The background sound to play during the call. Useful to give the impression that
     * your AI agent is in an office.
     */
    background_sound: 'audio/office.ogg' | null;

    calendly: Assistant.Calendly | null;

    /**
     * Configuration for call retry behavior including time windows, delays, and max
     * iterations. If not provided, defaults will be used.
     */
    call_retry_config: Assistant.CallRetryConfig | null;

    created_at: unknown;

    end_of_call_sentence: string | null;

    first_sentence: string | null;

    /**
     * Delay in milliseconds before speaking the first sentence. Default: 400.
     */
    first_sentence_delay_ms: number;

    first_sentence_mode: 'generated' | 'static' | 'none';

    /**
     * Enable IVR navigation tools. When enabled, the assistant can send DTMF tones and
     * skip turns to navigate phone menus.
     */
    ivr_navigation_enabled: boolean;

    llm_model: Assistant.UnionMember0 | Assistant.UnionMember1;

    /**
     * The maximum duration of the call in seconds. This is the maximum time the call
     * will be allowed to run.
     */
    max_call_duration_secs: number;

    name: string;

    organization_id: string;

    prompt: string;

    /**
     * The structured output config to use for the call. This is used to extract the
     * data from the call (like email, name, company name, etc.).
     */
    structured_output_config: Array<Assistant.StructuredOutputConfig> | null;

    /**
     * Phone number to transfer calls to when users request to speak to a human agent.
     */
    transfer_phone_number: string | null;

    updated_at: unknown;

    voice: Assistant.Voice | null;

    /**
     * If set, when voicemail is detected the agent will speak this message then hang
     * up; if null, hang up immediately.
     */
    voicemail_message: string | null;

    /**
     * The webhook URL to call when the call is completed.
     */
    webhook_url: string | null;

    faq_items?: Array<Assistant.FaqItem>;

    pending_faq_count?: number;
  }

  export namespace Assistant {
    export interface Calendly {
      /**
       * The connection ID representing the link between your Calendly account and Revox.
       */
      connection_id: string;

      /**
       * The event type ID representing the event type to schedule. (eg:
       * https://api.calendly.com/event_types/b2330295-2a91-4a1d-bb73-99e7707663d5)
       */
      event_type_id: string;
    }

    /**
     * Configuration for call retry behavior including time windows, delays, and max
     * iterations. If not provided, defaults will be used.
     */
    export interface CallRetryConfig {
      calling_windows: Array<CallRetryConfig.CallingWindow>;

      /**
       * Maximum number of call retry attempts. Default: 3.
       */
      max_retry_attempts: number;

      /**
       * Optional IANA timezone identifier to override the automatic timezone detection
       * from phone number. If not provided, timezone is determined from the recipient's
       * phone number country code. Examples: 'America/New_York', 'Europe/Paris'.
       */
      timezone?: string | null;
    }

    export namespace CallRetryConfig {
      export interface CallingWindow {
        /**
         * End time for the calling window in the recipient's timezone (or
         * timezone_override if provided). Format: 'HH:mm' (24-hour) or 'H:mma' (12-hour).
         * Examples: '17:00', '6pm'. Default: '18:00'.
         */
        calling_window_end_time: string;

        /**
         * Start time for the calling window in the recipient's timezone (or
         * timezone_override if provided). Format: 'HH:mm' (24-hour) or 'H:mma' (12-hour).
         * Examples: '09:00', '10am'. Default: '10:00'.
         */
        calling_window_start_time: string;

        /**
         * Delay between retry attempts in seconds. Default: 7200 (2 hours).
         */
        retry_delay_seconds: number;
      }
    }

    export interface UnionMember0 {
      name: 'gpt-4.1' | 'ministral-3-8b-instruct';

      type: 'dedicated-instance';
    }

    export interface UnionMember1 {
      /**
       * The model ID to use from OpenRouter. eg: openai/gpt-4.1
       */
      openrouter_model_id: string;

      /**
       * The provider to use from OpenRouter. eg: nebius, openai, azure, etc.
       */
      openrouter_provider: string;

      /**
       * Use a model from OpenRouter.
       */
      type: 'openrouter';
    }

    export interface StructuredOutputConfig {
      name: string;

      required: boolean;

      type: 'string' | 'number' | 'boolean' | 'enum' | 'date' | 'datetime';

      description?: string;

      enum_options?: Array<string>;
    }

    export interface Voice {
      /**
       * The ID of the voice.
       */
      id: string;

      /**
       * The provider of the voice.
       */
      provider: 'cartesia' | 'elevenlabs';

      /**
       * The speed of the voice. Range depends on provider: Cartesia 0.6–1.5, ElevenLabs
       * 0.7–1.2. Default is 1.0.
       */
      speed?: number;
    }

    export interface FaqItem {
      answer: string;

      question: string;

      id?: string;

      needs_human_answer?: boolean;

      source?: 'human' | 'ai';
    }
  }
}

export interface AssistantListResponse {
  assistants: Array<AssistantListResponse.Assistant>;
}

export namespace AssistantListResponse {
  export interface Assistant {
    id: string;

    /**
     * The background sound to play during the call. Useful to give the impression that
     * your AI agent is in an office.
     */
    background_sound: 'audio/office.ogg' | null;

    calendly: Assistant.Calendly | null;

    /**
     * Configuration for call retry behavior including time windows, delays, and max
     * iterations. If not provided, defaults will be used.
     */
    call_retry_config: Assistant.CallRetryConfig | null;

    created_at: unknown;

    end_of_call_sentence: string | null;

    first_sentence: string | null;

    /**
     * Delay in milliseconds before speaking the first sentence. Default: 400.
     */
    first_sentence_delay_ms: number;

    first_sentence_mode: 'generated' | 'static' | 'none';

    /**
     * Enable IVR navigation tools. When enabled, the assistant can send DTMF tones and
     * skip turns to navigate phone menus.
     */
    ivr_navigation_enabled: boolean;

    llm_model: Assistant.UnionMember0 | Assistant.UnionMember1;

    /**
     * The maximum duration of the call in seconds. This is the maximum time the call
     * will be allowed to run.
     */
    max_call_duration_secs: number;

    name: string;

    organization_id: string;

    prompt: string;

    /**
     * The structured output config to use for the call. This is used to extract the
     * data from the call (like email, name, company name, etc.).
     */
    structured_output_config: Array<Assistant.StructuredOutputConfig> | null;

    /**
     * Phone number to transfer calls to when users request to speak to a human agent.
     */
    transfer_phone_number: string | null;

    updated_at: unknown;

    voice: Assistant.Voice | null;

    /**
     * If set, when voicemail is detected the agent will speak this message then hang
     * up; if null, hang up immediately.
     */
    voicemail_message: string | null;

    /**
     * The webhook URL to call when the call is completed.
     */
    webhook_url: string | null;

    faq_items?: Array<Assistant.FaqItem>;

    pending_faq_count?: number;
  }

  export namespace Assistant {
    export interface Calendly {
      /**
       * The connection ID representing the link between your Calendly account and Revox.
       */
      connection_id: string;

      /**
       * The event type ID representing the event type to schedule. (eg:
       * https://api.calendly.com/event_types/b2330295-2a91-4a1d-bb73-99e7707663d5)
       */
      event_type_id: string;
    }

    /**
     * Configuration for call retry behavior including time windows, delays, and max
     * iterations. If not provided, defaults will be used.
     */
    export interface CallRetryConfig {
      calling_windows: Array<CallRetryConfig.CallingWindow>;

      /**
       * Maximum number of call retry attempts. Default: 3.
       */
      max_retry_attempts: number;

      /**
       * Optional IANA timezone identifier to override the automatic timezone detection
       * from phone number. If not provided, timezone is determined from the recipient's
       * phone number country code. Examples: 'America/New_York', 'Europe/Paris'.
       */
      timezone?: string | null;
    }

    export namespace CallRetryConfig {
      export interface CallingWindow {
        /**
         * End time for the calling window in the recipient's timezone (or
         * timezone_override if provided). Format: 'HH:mm' (24-hour) or 'H:mma' (12-hour).
         * Examples: '17:00', '6pm'. Default: '18:00'.
         */
        calling_window_end_time: string;

        /**
         * Start time for the calling window in the recipient's timezone (or
         * timezone_override if provided). Format: 'HH:mm' (24-hour) or 'H:mma' (12-hour).
         * Examples: '09:00', '10am'. Default: '10:00'.
         */
        calling_window_start_time: string;

        /**
         * Delay between retry attempts in seconds. Default: 7200 (2 hours).
         */
        retry_delay_seconds: number;
      }
    }

    export interface UnionMember0 {
      name: 'gpt-4.1' | 'ministral-3-8b-instruct';

      type: 'dedicated-instance';
    }

    export interface UnionMember1 {
      /**
       * The model ID to use from OpenRouter. eg: openai/gpt-4.1
       */
      openrouter_model_id: string;

      /**
       * The provider to use from OpenRouter. eg: nebius, openai, azure, etc.
       */
      openrouter_provider: string;

      /**
       * Use a model from OpenRouter.
       */
      type: 'openrouter';
    }

    export interface StructuredOutputConfig {
      name: string;

      required: boolean;

      type: 'string' | 'number' | 'boolean' | 'enum' | 'date' | 'datetime';

      description?: string;

      enum_options?: Array<string>;
    }

    export interface Voice {
      /**
       * The ID of the voice.
       */
      id: string;

      /**
       * The provider of the voice.
       */
      provider: 'cartesia' | 'elevenlabs';

      /**
       * The speed of the voice. Range depends on provider: Cartesia 0.6–1.5, ElevenLabs
       * 0.7–1.2. Default is 1.0.
       */
      speed?: number;
    }

    export interface FaqItem {
      answer: string;

      question: string;

      id?: string;

      needs_human_answer?: boolean;

      source?: 'human' | 'ai';
    }
  }
}

export interface AssistantDeleteResponse {
  success: boolean;
}

export interface AssistantCreateParams {
  name: string;

  /**
   * The prompt to use for the call. This will be given to the LLM (gpt-4.1)
   */
  prompt: string;

  /**
   * The background sound to play during the call. Useful to give the impression that
   * your AI agent is in an office, in the street, or anywhere else you want.
   */
  background_sound?: 'audio/office.ogg' | null;

  calendly?: AssistantCreateParams.Calendly | null;

  /**
   * Configuration for call retry behavior including time windows, delays, and max
   * iterations. If not provided, defaults will be used.
   */
  call_retry_config?: AssistantCreateParams.CallRetryConfig;

  /**
   * Optional message to say when the agent decides to end the call.
   */
  end_of_call_sentence?: string;

  /**
   * FAQ items to associate with this assistant. When provided, replaces all existing
   * FAQ items.
   */
  faq_items?: Array<AssistantCreateParams.FaqItem>;

  /**
   * The first sentence to use for the call. This will be given to the LLM
   */
  first_sentence?: string;

  /**
   * Delay in milliseconds before speaking the first sentence. Default: 400.
   */
  first_sentence_delay_ms?: number;

  /**
   * How the first sentence should be handled. "generated" means the LLM will
   * generate a response based on the first_sentence instruction. "static" means the
   * first_sentence will be spoken exactly as provided. "none" means the agent will
   * not speak first and will wait for the user.
   */
  first_sentence_mode?: 'generated' | 'static' | 'none';

  /**
   * Enable IVR navigation tools. When enabled, the assistant can send DTMF tones and
   * skip turns to navigate phone menus.
   */
  ivr_navigation_enabled?: boolean;

  llm_model?: AssistantCreateParams.UnionMember0 | AssistantCreateParams.UnionMember1;

  /**
   * The maximum duration of the call in seconds. This is the maximum time the call
   * will be allowed to run.
   */
  max_call_duration_secs?: number;

  /**
   * The structured output config to use for the call. This is used to extract the
   * data from the call (like email, name, company name, etc.).
   */
  structured_output_config?: Array<AssistantCreateParams.StructuredOutputConfig>;

  /**
   * Phone number to transfer calls to when users request to speak to a human agent
   * in E.164 format (e.g. +1234567890).
   */
  transfer_phone_number?: string | null;

  /**
   * The voice to use for the call. You can get the list of voices using the /voices
   * endpoint
   */
  voice?: AssistantCreateParams.Voice;

  /**
   * If set, when voicemail is detected the agent will speak this message then hang
   * up; if null, hang up immediately.
   */
  voicemail_message?: string | null;

  /**
   * The webhook URL to call when the call is completed.
   */
  webhook_url?: string;
}

export namespace AssistantCreateParams {
  export interface Calendly {
    /**
     * The connection ID representing the link between your Calendly account and Revox.
     */
    connection_id: string;

    /**
     * The event type ID representing the event type to schedule. (eg:
     * https://api.calendly.com/event_types/b2330295-2a91-4a1d-bb73-99e7707663d5)
     */
    event_type_id: string;
  }

  /**
   * Configuration for call retry behavior including time windows, delays, and max
   * iterations. If not provided, defaults will be used.
   */
  export interface CallRetryConfig {
    calling_windows: Array<CallRetryConfig.CallingWindow>;

    /**
     * Maximum number of call retry attempts. Default: 3.
     */
    max_retry_attempts: number;

    /**
     * Optional IANA timezone identifier to override the automatic timezone detection
     * from phone number. If not provided, timezone is determined from the recipient's
     * phone number country code. Examples: 'America/New_York', 'Europe/Paris'.
     */
    timezone?: string | null;
  }

  export namespace CallRetryConfig {
    export interface CallingWindow {
      /**
       * End time for the calling window in the recipient's timezone (or
       * timezone_override if provided). Format: 'HH:mm' (24-hour) or 'H:mma' (12-hour).
       * Examples: '17:00', '6pm'. Default: '18:00'.
       */
      calling_window_end_time: string;

      /**
       * Start time for the calling window in the recipient's timezone (or
       * timezone_override if provided). Format: 'HH:mm' (24-hour) or 'H:mma' (12-hour).
       * Examples: '09:00', '10am'. Default: '10:00'.
       */
      calling_window_start_time: string;

      /**
       * Delay between retry attempts in seconds. Default: 7200 (2 hours).
       */
      retry_delay_seconds: number;
    }
  }

  export interface FaqItem {
    answer: string;

    question: string;
  }

  export interface UnionMember0 {
    name: 'gpt-4.1' | 'ministral-3-8b-instruct';

    type: 'dedicated-instance';
  }

  export interface UnionMember1 {
    /**
     * The model ID to use from OpenRouter. eg: openai/gpt-4.1
     */
    openrouter_model_id: string;

    /**
     * The provider to use from OpenRouter. eg: nebius, openai, azure, etc.
     */
    openrouter_provider: string;

    /**
     * Use a model from OpenRouter.
     */
    type: 'openrouter';
  }

  export interface StructuredOutputConfig {
    name: string;

    required: boolean;

    type: 'string' | 'number' | 'boolean' | 'enum' | 'date' | 'datetime';

    description?: string;

    enum_options?: Array<string>;
  }

  /**
   * The voice to use for the call. You can get the list of voices using the /voices
   * endpoint
   */
  export interface Voice {
    /**
     * The ID of the voice.
     */
    id: string;

    /**
     * The provider of the voice.
     */
    provider: 'cartesia' | 'elevenlabs';

    /**
     * The speed of the voice. Range depends on provider: Cartesia 0.6–1.5, ElevenLabs
     * 0.7–1.2. Default is 1.0.
     */
    speed?: number;
  }
}

export interface AssistantUpdateParams {
  /**
   * The background sound to play during the call. Useful to give the impression that
   * your AI agent is in an office, in the street, or anywhere else you want.
   */
  background_sound?: 'audio/office.ogg' | null;

  calendly?: AssistantUpdateParams.Calendly | null;

  /**
   * Configuration for call retry behavior including time windows, delays, and max
   * iterations. If not provided, defaults will be used.
   */
  call_retry_config?: AssistantUpdateParams.CallRetryConfig;

  /**
   * Optional message to say when the agent decides to end the call.
   */
  end_of_call_sentence?: string;

  /**
   * FAQ items to associate with this assistant. When provided, replaces all existing
   * FAQ items.
   */
  faq_items?: Array<AssistantUpdateParams.FaqItem>;

  /**
   * The first sentence to use for the call. This will be given to the LLM
   */
  first_sentence?: string;

  /**
   * Delay in milliseconds before speaking the first sentence. Default: 400.
   */
  first_sentence_delay_ms?: number;

  /**
   * How the first sentence should be handled. "generated" means the LLM will
   * generate a response based on the first_sentence instruction. "static" means the
   * first_sentence will be spoken exactly as provided. "none" means the agent will
   * not speak first and will wait for the user.
   */
  first_sentence_mode?: 'generated' | 'static' | 'none';

  /**
   * Enable IVR navigation tools. When enabled, the assistant can send DTMF tones and
   * skip turns to navigate phone menus.
   */
  ivr_navigation_enabled?: boolean;

  llm_model?: AssistantUpdateParams.UnionMember0 | AssistantUpdateParams.UnionMember1;

  /**
   * The maximum duration of the call in seconds. This is the maximum time the call
   * will be allowed to run.
   */
  max_call_duration_secs?: number;

  name?: string;

  /**
   * The prompt to use for the call. This will be given to the LLM (gpt-4.1)
   */
  prompt?: string;

  /**
   * The structured output config to use for the call. This is used to extract the
   * data from the call (like email, name, company name, etc.).
   */
  structured_output_config?: Array<AssistantUpdateParams.StructuredOutputConfig>;

  /**
   * Phone number to transfer calls to when users request to speak to a human agent
   * in E.164 format (e.g. +1234567890).
   */
  transfer_phone_number?: string | null;

  /**
   * The voice to use for the call. You can get the list of voices using the /voices
   * endpoint
   */
  voice?: AssistantUpdateParams.Voice;

  /**
   * If set, when voicemail is detected the agent will speak this message then hang
   * up; if null, hang up immediately.
   */
  voicemail_message?: string | null;

  /**
   * The webhook URL to call when the call is completed.
   */
  webhook_url?: string;
}

export namespace AssistantUpdateParams {
  export interface Calendly {
    /**
     * The connection ID representing the link between your Calendly account and Revox.
     */
    connection_id: string;

    /**
     * The event type ID representing the event type to schedule. (eg:
     * https://api.calendly.com/event_types/b2330295-2a91-4a1d-bb73-99e7707663d5)
     */
    event_type_id: string;
  }

  /**
   * Configuration for call retry behavior including time windows, delays, and max
   * iterations. If not provided, defaults will be used.
   */
  export interface CallRetryConfig {
    calling_windows: Array<CallRetryConfig.CallingWindow>;

    /**
     * Maximum number of call retry attempts. Default: 3.
     */
    max_retry_attempts: number;

    /**
     * Optional IANA timezone identifier to override the automatic timezone detection
     * from phone number. If not provided, timezone is determined from the recipient's
     * phone number country code. Examples: 'America/New_York', 'Europe/Paris'.
     */
    timezone?: string | null;
  }

  export namespace CallRetryConfig {
    export interface CallingWindow {
      /**
       * End time for the calling window in the recipient's timezone (or
       * timezone_override if provided). Format: 'HH:mm' (24-hour) or 'H:mma' (12-hour).
       * Examples: '17:00', '6pm'. Default: '18:00'.
       */
      calling_window_end_time: string;

      /**
       * Start time for the calling window in the recipient's timezone (or
       * timezone_override if provided). Format: 'HH:mm' (24-hour) or 'H:mma' (12-hour).
       * Examples: '09:00', '10am'. Default: '10:00'.
       */
      calling_window_start_time: string;

      /**
       * Delay between retry attempts in seconds. Default: 7200 (2 hours).
       */
      retry_delay_seconds: number;
    }
  }

  export interface FaqItem {
    answer: string;

    question: string;
  }

  export interface UnionMember0 {
    name: 'gpt-4.1' | 'ministral-3-8b-instruct';

    type: 'dedicated-instance';
  }

  export interface UnionMember1 {
    /**
     * The model ID to use from OpenRouter. eg: openai/gpt-4.1
     */
    openrouter_model_id: string;

    /**
     * The provider to use from OpenRouter. eg: nebius, openai, azure, etc.
     */
    openrouter_provider: string;

    /**
     * Use a model from OpenRouter.
     */
    type: 'openrouter';
  }

  export interface StructuredOutputConfig {
    name: string;

    required: boolean;

    type: 'string' | 'number' | 'boolean' | 'enum' | 'date' | 'datetime';

    description?: string;

    enum_options?: Array<string>;
  }

  /**
   * The voice to use for the call. You can get the list of voices using the /voices
   * endpoint
   */
  export interface Voice {
    /**
     * The ID of the voice.
     */
    id: string;

    /**
     * The provider of the voice.
     */
    provider: 'cartesia' | 'elevenlabs';

    /**
     * The speed of the voice. Range depends on provider: Cartesia 0.6–1.5, ElevenLabs
     * 0.7–1.2. Default is 1.0.
     */
    speed?: number;
  }
}

export declare namespace Assistants {
  export {
    type AssistantCreateResponse as AssistantCreateResponse,
    type AssistantRetrieveResponse as AssistantRetrieveResponse,
    type AssistantUpdateResponse as AssistantUpdateResponse,
    type AssistantListResponse as AssistantListResponse,
    type AssistantDeleteResponse as AssistantDeleteResponse,
    type AssistantCreateParams as AssistantCreateParams,
    type AssistantUpdateParams as AssistantUpdateParams,
  };
}
