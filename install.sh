#!/usr/bin/env bash
if [ -x "$(command -v apm)" ]; then
  echo "apm detected"
else
  echo "not detected"
fi
atom .
