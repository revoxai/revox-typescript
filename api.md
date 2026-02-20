# Assistants

Types:

- <code><a href="./src/resources/assistants.ts">AssistantCreateResponse</a></code>
- <code><a href="./src/resources/assistants.ts">AssistantRetrieveResponse</a></code>
- <code><a href="./src/resources/assistants.ts">AssistantUpdateResponse</a></code>
- <code><a href="./src/resources/assistants.ts">AssistantListResponse</a></code>
- <code><a href="./src/resources/assistants.ts">AssistantDeleteResponse</a></code>

Methods:

- <code title="post /assistants">client.assistants.<a href="./src/resources/assistants.ts">create</a>({ ...params }) -> AssistantCreateResponse</code>
- <code title="get /assistants/{id}">client.assistants.<a href="./src/resources/assistants.ts">retrieve</a>(id) -> AssistantRetrieveResponse</code>
- <code title="patch /assistants/{id}">client.assistants.<a href="./src/resources/assistants.ts">update</a>(id, { ...params }) -> AssistantUpdateResponse</code>
- <code title="get /assistants">client.assistants.<a href="./src/resources/assistants.ts">list</a>() -> AssistantListResponse</code>
- <code title="delete /assistants/{id}">client.assistants.<a href="./src/resources/assistants.ts">delete</a>(id) -> AssistantDeleteResponse</code>

# Call

Types:

- <code><a href="./src/resources/call.ts">CallCreateResponse</a></code>
- <code><a href="./src/resources/call.ts">CallRetrieveResponse</a></code>
- <code><a href="./src/resources/call.ts">CallListResponse</a></code>

Methods:

- <code title="post /call">client.call.<a href="./src/resources/call.ts">create</a>({ ...params }) -> CallCreateResponse</code>
- <code title="get /call/{id}">client.call.<a href="./src/resources/call.ts">retrieve</a>(id) -> CallRetrieveResponse</code>
- <code title="get /call">client.call.<a href="./src/resources/call.ts">list</a>({ ...params }) -> CallListResponse</code>

# Voices

Types:

- <code><a href="./src/resources/voices.ts">VoiceRetrieveResponse</a></code>
- <code><a href="./src/resources/voices.ts">VoiceListResponse</a></code>

Methods:

- <code title="get /voices/{id}">client.voices.<a href="./src/resources/voices.ts">retrieve</a>(id, { ...params }) -> VoiceRetrieveResponse</code>
- <code title="get /voices">client.voices.<a href="./src/resources/voices.ts">list</a>() -> VoiceListResponse</code>
- <code title="post /voices/preview">client.voices.<a href="./src/resources/voices.ts">preview</a>({ ...params }) -> void</code>

# Users

## Me

Types:

- <code><a href="./src/resources/users/me.ts">MeRetrieveResponse</a></code>
- <code><a href="./src/resources/users/me.ts">MeUpdateResponse</a></code>

Methods:

- <code title="get /users/me">client.users.me.<a href="./src/resources/users/me.ts">retrieve</a>() -> MeRetrieveResponse</code>
- <code title="patch /users/me">client.users.me.<a href="./src/resources/users/me.ts">update</a>({ ...params }) -> MeUpdateResponse</code>
