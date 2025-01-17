# Expo Linking API Android Deep Link Issue

This repository demonstrates a bug in the Expo `Linking` API on Android where the event listener for deep links may not consistently fire when the app is already open.  The problem is more pronounced when the application is in the background.

## Problem Description

The `Linking.addEventListener` function is expected to trigger a callback whenever a deep link is opened, regardless of the app's state. However, in certain circumstances, particularly when the app is already running (in the foreground or background), the callback is not consistently invoked. This leads to the deep link being ignored.

## Steps to Reproduce

1. Clone this repository.
2. Run the app on an Android emulator or device.
3. Open a deep link (e.g., using a browser).
4. Observe whether the event listener is triggered and the deep link is handled correctly.
5. Repeat this process multiple times with the app in the foreground and background.
6. Note the inconsistency in behavior across different runs.

## Solution

A workaround to address this is provided in the `bugSolution.js` file. This solution involves utilizing the `Linking.getInitialURLAsync()` to check for a pending URL immediately on app startup and integrating this logic with the event listener. This ensures capturing deep links even when the listener may fail to trigger.