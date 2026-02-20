// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Revox from '@revoxai/sdk';

const client = new Revox({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource call', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.call.create({ phone_number: 'phone_number' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.call.create({
      phone_number: 'phone_number',
      assistant: {
        prompt: 'prompt',
        background_sound: 'audio/office.ogg',
        calendly: { connection_id: 'connection_id', event_type_id: 'event_type_id' },
        call_retry_config: {
          calling_windows: [
            {
              calling_window_end_time: 'calling_window_end_time',
              calling_window_start_time: 'calling_window_start_time',
              retry_delay_seconds: 1,
            },
          ],
          max_retry_attempts: 1,
          timezone: 'timezone',
        },
        end_of_call_sentence: 'end_of_call_sentence',
        faq_items: [{ answer: 'answer', question: 'question' }],
        first_sentence: 'first_sentence',
        first_sentence_delay_ms: 0,
        first_sentence_mode: 'generated',
        ivr_navigation_enabled: true,
        llm_model: { name: 'gpt-4.1', type: 'dedicated-instance' },
        max_call_duration_secs: 0,
        structured_output_config: [
          {
            name: 'x',
            required: true,
            type: 'string',
            description: 'description',
            enum_options: ['string'],
          },
        ],
        transfer_phone_number: 'transfer_phone_number',
        voice: {
          id: 'x',
          provider: 'cartesia',
          speed: 0.6,
        },
        voicemail_message: 'voicemail_message',
        webhook_url: 'webhook_url',
      },
      assistant_id: 'assistant_id',
      concurrency: { key: 'key', max: 1 },
      force_now: true,
      from_phone_number: 'from_phone_number',
      metadata: { foo: 'string' },
      prompt_variables: { foo: 'string' },
      scheduled_at: '2019-12-27T18:11:19.117Z',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.call.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.call.list({ page: 0, page_size: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.call.list({ page: 0, page_size: 0 });
  });
});
