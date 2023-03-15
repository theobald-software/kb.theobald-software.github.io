---
layout: releaseNotes
---

- Theobald.Common 2.22.0

ByteSerialization has implementations, in little and big endian, for serializing and deserializing different dotnet types in/from raw bytes.

ByteBufferManager references the ByteSerialization (according to the given endianness) and implements methods to handle writing, reading and slicing a byte buffer.