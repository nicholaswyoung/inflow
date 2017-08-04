# Inflow

[![Greenkeeper badge](https://badges.greenkeeper.io/nicholaswyoung/inflow.svg)](https://greenkeeper.io/)

A simple helper for Node.js and [InfluxDB](http://influxdb.com).

## Purpose

Inflow allows you to configure the [database driver](https://github.com/bencevans/node-influx) once and simply
```require('inflow')``` everywhere else in your app.

Frankly, this is a personal choice. Here at
[Original Machine](http://originalmachine.com) we love Node, but also strictly
adhere to the paradigm of [Convention Over Configuration](http://en.wikipedia.org/wiki/Convention_over_configuration).
To us, this means you should write configuration in one place, so you can
freely use packages, without additional steps, anywhere else in your app.

## Configuration

```javascript
require('inflow').configure({
  // InfluxDB client settings.
});
```

From then on, prepend any calls to the standard ```influx``` library with ```db```. For instance:

```javascript
var inflow = require('inflow');

inflow.configure({});

inflow.db.createDatabase();
```

## License

Copyright (C) Original Machine LLC.
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
