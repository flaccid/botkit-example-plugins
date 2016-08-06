# botkit-example-plugins

Example skellington plugins for Botkit.

## Installation

    $ npm install botkit-example-plugins

## Usage

    $ npm start

### Docker

#### Build

    $ docker build -t botkit-example-plugins .

#### Run

    $ docker run -it -p 8585:8585 -e SLACK_API_TOKEN=1234 botkit-example-plugins

#### Runtime Environment Variables

There should be a reasonable amount of flexibility using the available variables. If not please raise an issue so your use case can be covered!

 (TODO)

#### Tag and Push

    $ docker tag botkit-example-plugins flaccid/botkit-example-plugins
    $ docker push flaccid/botkit-example-plugins


License and Authors
-------------------
- Author: Chris Fordham (<chris@fordham-nagy.id.au>)

```text
Copyright 2016, Chris Fordham

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
