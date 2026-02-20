// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Call extends APIResource {
  /**
   * Place a new call order. A call order can be resolved over multiple call attempts
   * spanning up to a few days.
   */
  create(body: CallCreateParams, options?: RequestOptions): APIPromise<CallCreateResponse> {
    return this._client.post('/call', { body, ...options });
  }

  /**
   * Get a call order by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CallRetrieveResponse> {
    return this._client.get(path`/call/${id}`, options);
  }

  /**
   * Get the list of call orders.
   */
  list(query: CallListParams, options?: RequestOptions): APIPromise<CallListResponse> {
    return this._client.get('/call', { query, ...options });
  }
}

export interface CallCreateResponse {
  /**
   * This represent a call "order" that was requested by the user. A call order can
   * be resolved over multiple call attempts spanning up to a few days.
   */
  call: CallCreateResponse.Call;
}

export namespace CallCreateResponse {
  /**
   * This represent a call "order" that was requested by the user. A call order can
   * be resolved over multiple call attempts spanning up to a few days.
   */
  export interface Call {
    /**
     * The ID of the call.
     */
    id: string;

    /**
     * All call attempts for this call order, ordered by most recent first.
     */
    call_attempts: Array<Call.CallAttempt>;

    /**
     * Configuration for call retry behavior including time windows, delays, and max
     * iterations. If not provided, defaults will be used.
     */
    call_retry_config: Call.CallRetryConfig | null;

    /**
     * The number of call attempts made.
     */
    calls_count: number;

    /**
     * The time the call order was created.
     */
    created_at: unknown;

    /**
     * Whether the call is inbound or outbound.
     */
    direction: 'inbound' | 'outbound';

    /**
     * Delay in milliseconds before speaking the first sentence. Default: 400.
     */
    first_sentence_delay_ms: number;

    /**
     * The phone number that made the call. Formatted in E.164 format. Example:
     * +1234567890
     */
    from_phone_number: string;

    /**
     * Whether the call was cancelled.
     */
    is_cancelled: boolean;

    /**
     * Whether the call is completed or still in progress.
     */
    is_completed: boolean;

    /**
     * This represent a single call attempt. A call attempt is a single call made to
     * the phone number.
     */
    last_call_attempt: Call.LastCallAttempt | null;

    llm_model: Call.UnionMember0 | Call.UnionMember1;

    /**
     * Metadata stored with the call.
     */
    metadata: { [key: string]: string } | null;

    /**
     * The next call attempt time.
     */
    next_call_at: unknown;

    /**
     * The time the call order is scheduled to start.
     */
    scheduled_at: unknown;

    /**
     * The phone number that received the call. Formatted in E.164 format. Example:
     * +1234567890
     */
    to_phone_number: string;
  }

  export namespace Call {
    /**
     * This represent a single call attempt. A call attempt is a single call made to
     * the phone number.
     */
    export interface CallAttempt {
      /**
       * The ID of the call attempt.
       */
      id: string;

      /**
       * The time the call was answered.
       */
      answered_at: unknown;

      /**
       * The time the call ended.
       */
      ended_at: unknown;

      /**
       * The phone number that was called. Formatted in E.164 format. Example:
       * +1234567890
       */
      phone_number: string;

      /**
       * The URL of the audio recording of the call.
       */
      recording_url: string | null;

      result: 'IVR' | 'voicemail' | 'human' | 'unknown' | null;

      /**
       * The time the call started.
       */
      started_at: unknown;

      /**
       * The status of the call attempt.
       */
      status: 'queued' | 'ringing' | 'ongoing' | 'completed';

      /**
       * The data extracted from the call, using the structured output config from the
       * parent call object.
       */
      structured_output?: { [key: string]: unknown } | null;

      /**
       * The transcript of the call.
       */
      transcript?: Array<CallAttempt.Transcript> | null;
    }

    export namespace CallAttempt {
      export interface Transcript {
        content: string;

        role: 'user' | 'assistant' | 'tool';

        tool_arguments?: { [key: string]: unknown } | string;

        tool_is_error?: boolean;

        tool_name?: string;
      }
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

    /**
     * This represent a single call attempt. A call attempt is a single call made to
     * the phone number.
     */
    export interface LastCallAttempt {
      /**
       * The ID of the call attempt.
       */
      id: string;

      /**
       * The time the call was answered.
       */
      answered_at: unknown;

      /**
       * The time the call ended.
       */
      ended_at: unknown;

      /**
       * The phone number that was called. Formatted in E.164 format. Example:
       * +1234567890
       */
      phone_number: string;

      /**
       * The URL of the audio recording of the call.
       */
      recording_url: string | null;

      result: 'IVR' | 'voicemail' | 'human' | 'unknown' | null;

      /**
       * The time the call started.
       */
      started_at: unknown;

      /**
       * The status of the call attempt.
       */
      status: 'queued' | 'ringing' | 'ongoing' | 'completed';

      /**
       * The data extracted from the call, using the structured output config from the
       * parent call object.
       */
      structured_output?: { [key: string]: unknown } | null;

      /**
       * The transcript of the call.
       */
      transcript?: Array<LastCallAttempt.Transcript> | null;
    }

    export namespace LastCallAttempt {
      export interface Transcript {
        content: string;

        role: 'user' | 'assistant' | 'tool';

        tool_arguments?: { [key: string]: unknown } | string;

        tool_is_error?: boolean;

        tool_name?: string;
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
  }
}

export interface CallRetrieveResponse {
  /**
   * This represent a call "order" that was requested by the user. A call order can
   * be resolved over multiple call attempts spanning up to a few days.
   */
  call: CallRetrieveResponse.Call;
}

export namespace CallRetrieveResponse {
  /**
   * This represent a call "order" that was requested by the user. A call order can
   * be resolved over multiple call attempts spanning up to a few days.
   */
  export interface Call {
    /**
     * The ID of the call.
     */
    id: string;

    /**
     * All call attempts for this call order, ordered by most recent first.
     */
    call_attempts: Array<Call.CallAttempt>;

    /**
     * Configuration for call retry behavior including time windows, delays, and max
     * iterations. If not provided, defaults will be used.
     */
    call_retry_config: Call.CallRetryConfig | null;

    /**
     * The number of call attempts made.
     */
    calls_count: number;

    /**
     * The time the call order was created.
     */
    created_at: unknown;

    /**
     * Whether the call is inbound or outbound.
     */
    direction: 'inbound' | 'outbound';

    /**
     * Delay in milliseconds before speaking the first sentence. Default: 400.
     */
    first_sentence_delay_ms: number;

    /**
     * The phone number that made the call. Formatted in E.164 format. Example:
     * +1234567890
     */
    from_phone_number: string;

    /**
     * Whether the call was cancelled.
     */
    is_cancelled: boolean;

    /**
     * Whether the call is completed or still in progress.
     */
    is_completed: boolean;

    /**
     * This represent a single call attempt. A call attempt is a single call made to
     * the phone number.
     */
    last_call_attempt: Call.LastCallAttempt | null;

    llm_model: Call.UnionMember0 | Call.UnionMember1;

    /**
     * Metadata stored with the call.
     */
    metadata: { [key: string]: string } | null;

    /**
     * The next call attempt time.
     */
    next_call_at: unknown;

    /**
     * The time the call order is scheduled to start.
     */
    scheduled_at: unknown;

    /**
     * The phone number that received the call. Formatted in E.164 format. Example:
     * +1234567890
     */
    to_phone_number: string;
  }

  export namespace Call {
    /**
     * This represent a single call attempt. A call attempt is a single call made to
     * the phone number.
     */
    export interface CallAttempt {
      /**
       * The ID of the call attempt.
       */
      id: string;

      /**
       * The time the call was answered.
       */
      answered_at: unknown;

      /**
       * The time the call ended.
       */
      ended_at: unknown;

      /**
       * The phone number that was called. Formatted in E.164 format. Example:
       * +1234567890
       */
      phone_number: string;

      /**
       * The URL of the audio recording of the call.
       */
      recording_url: string | null;

      result: 'IVR' | 'voicemail' | 'human' | 'unknown' | null;

      /**
       * The time the call started.
       */
      started_at: unknown;

      /**
       * The status of the call attempt.
       */
      status: 'queued' | 'ringing' | 'ongoing' | 'completed';

      /**
       * The data extracted from the call, using the structured output config from the
       * parent call object.
       */
      structured_output?: { [key: string]: unknown } | null;

      /**
       * The transcript of the call.
       */
      transcript?: Array<CallAttempt.Transcript> | null;
    }

    export namespace CallAttempt {
      export interface Transcript {
        content: string;

        role: 'user' | 'assistant' | 'tool';

        tool_arguments?: { [key: string]: unknown } | string;

        tool_is_error?: boolean;

        tool_name?: string;
      }
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

    /**
     * This represent a single call attempt. A call attempt is a single call made to
     * the phone number.
     */
    export interface LastCallAttempt {
      /**
       * The ID of the call attempt.
       */
      id: string;

      /**
       * The time the call was answered.
       */
      answered_at: unknown;

      /**
       * The time the call ended.
       */
      ended_at: unknown;

      /**
       * The phone number that was called. Formatted in E.164 format. Example:
       * +1234567890
       */
      phone_number: string;

      /**
       * The URL of the audio recording of the call.
       */
      recording_url: string | null;

      result: 'IVR' | 'voicemail' | 'human' | 'unknown' | null;

      /**
       * The time the call started.
       */
      started_at: unknown;

      /**
       * The status of the call attempt.
       */
      status: 'queued' | 'ringing' | 'ongoing' | 'completed';

      /**
       * The data extracted from the call, using the structured output config from the
       * parent call object.
       */
      structured_output?: { [key: string]: unknown } | null;

      /**
       * The transcript of the call.
       */
      transcript?: Array<LastCallAttempt.Transcript> | null;
    }

    export namespace LastCallAttempt {
      export interface Transcript {
        content: string;

        role: 'user' | 'assistant' | 'tool';

        tool_arguments?: { [key: string]: unknown } | string;

        tool_is_error?: boolean;

        tool_name?: string;
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
  }
}

export interface CallListResponse {
  calls: Array<CallListResponse.Call>;
}

export namespace CallListResponse {
  /**
   * This represent a single call attempt. A call attempt is a single call made to
   * the phone number.
   */
  export interface Call {
    /**
     * The ID of the call attempt.
     */
    id: string;

    /**
     * The time the call was answered.
     */
    answered_at: unknown;

    /**
     * The time the call ended.
     */
    ended_at: unknown;

    /**
     * The phone number that was called. Formatted in E.164 format. Example:
     * +1234567890
     */
    phone_number: string;

    /**
     * The URL of the audio recording of the call.
     */
    recording_url: string | null;

    result: 'IVR' | 'voicemail' | 'human' | 'unknown' | null;

    /**
     * The time the call started.
     */
    started_at: unknown;

    /**
     * The status of the call attempt.
     */
    status: 'queued' | 'ringing' | 'ongoing' | 'completed';

    /**
     * The data extracted from the call, using the structured output config from the
     * parent call object.
     */
    structured_output?: { [key: string]: unknown } | null;

    /**
     * The transcript of the call.
     */
    transcript?: Array<Call.Transcript> | null;
  }

  export namespace Call {
    export interface Transcript {
      content: string;

      role: 'user' | 'assistant' | 'tool';

      tool_arguments?: { [key: string]: unknown } | string;

      tool_is_error?: boolean;

      tool_name?: string;
    }
  }
}

export interface CallCreateParams {
  /**
   * The phone number to call in the E.164 format. Example: +1234567890
   */
  phone_number: string;

  /**
   * You can provide a custom assistant configuration here. If you don't provide an
   * assistant_id, this assistant object will be used for this call.
   */
  assistant?: CallCreateParams.Assistant;

  /**
   * The ID of the assistant to use for this call.
   */
  assistant_id?: string;

  /**
   * Limit the number of concurrent calls for a given concurrency key.
   */
  concurrency?: CallCreateParams.Concurrency;

  /**
   * The prompt to use for the call. This will be given to the LLM (gpt-4.1)
   */
  force_now?: boolean;

  /**
   * The phone number to use for making the call (e.g., +1234567890). If not
   * provided, uses the default trunk.
   */
  from_phone_number?: string;

  /**
   * Metadata to store with the call.
   */
  metadata?: { [key: string]: string };

  /**
   * Variables to interpolate into the prompt. Wether you use an assistant_id or an
   * assistant object, this will be used to interpolate the variables into the
   * prompt.
   */
  prompt_variables?: { [key: string]: string };

  /**
   * Schedule the call to start at a specific date and time (ISO 8601 format). If not
   * provided, the call will start immediately.
   */
  scheduled_at?: string | unknown;
}

export namespace CallCreateParams {
  /**
   * You can provide a custom assistant configuration here. If you don't provide an
   * assistant_id, this assistant object will be used for this call.
   */
  export interface Assistant {
    /**
     * The prompt to use for the call. This will be given to the LLM (gpt-4.1)
     */
    prompt: string;

    /**
     * The background sound to play during the call. Useful to give the impression that
     * your AI agent is in an office, in the street, or anywhere else you want.
     */
    background_sound?: 'audio/office.ogg' | null;

    calendly?: Assistant.Calendly | null;

    /**
     * Configuration for call retry behavior including time windows, delays, and max
     * iterations. If not provided, defaults will be used.
     */
    call_retry_config?: Assistant.CallRetryConfig;

    /**
     * Optional message to say when the agent decides to end the call.
     */
    end_of_call_sentence?: string;

    /**
     * FAQ items to associate with this assistant. When provided, replaces all existing
     * FAQ items.
     */
    faq_items?: Array<Assistant.FaqItem>;

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

    llm_model?: Assistant.UnionMember0 | Assistant.UnionMember1;

    /**
     * The maximum duration of the call in seconds. This is the maximum time the call
     * will be allowed to run.
     */
    max_call_duration_secs?: number;

    /**
     * The structured output config to use for the call. This is used to extract the
     * data from the call (like email, name, company name, etc.).
     */
    structured_output_config?: Array<Assistant.StructuredOutputConfig>;

    /**
     * Phone number to transfer calls to when users request to speak to a human agent
     * in E.164 format (e.g. +1234567890).
     */
    transfer_phone_number?: string | null;

    /**
     * The voice to use for the call. You can get the list of voices using the /voices
     * endpoint
     */
    voice?: Assistant.Voice;

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

  /**
   * Limit the number of concurrent calls for a given concurrency key.
   */
  export interface Concurrency {
    /**
     * The key for which you want to limit the number of concurrent calls.
     */
    key: string;

    /**
     * The maximum number of concurrent calls to allow for the given concurrency key.
     */
    max: number;
  }
}

export interface CallListParams {
  /**
   * The page number you want to get. Starting at 0.
   */
  page: number;

  page_size: number;
}

export declare namespace Call {
  export {
    type CallCreateResponse as CallCreateResponse,
    type CallRetrieveResponse as CallRetrieveResponse,
    type CallListResponse as CallListResponse,
    type CallCreateParams as CallCreateParams,
    type CallListParams as CallListParams,
  };
}
