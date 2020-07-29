#!/usr/bin/env bash

set -e
set -o pipefail
set -v

curl -s -X POST __STACKBIT_WEBHOOK_URL__/pull > /dev/null
if [[ -z "${STACKBIT_API_KEY}" ]]; then
    echo "WARNING: No STACKBIT_API_KEY environment variable set, skipping stackbit-pull"
else
    npx @stackbit/stackbit-pull --stackbit-pull-api-url=__STACKBIT_PULL_API_URL__
fi
curl -s -X POST __STACKBIT_WEBHOOK_URL__/ssgbuild > /dev/null
gatsby build
curl -s -X POST __STACKBIT_WEBHOOK_URL__/publish > /dev/null
