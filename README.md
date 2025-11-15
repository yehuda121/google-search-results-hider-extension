# Google Search Results Hider – Chrome Extension

This project provides a simple Chrome extension that allows users to hide individual Google search results directly from the search page. The extension adds a small “Hide” button above each result. When clicked, the selected block is removed from the current search view.

The goal of the extension is to make it easier to clean up irrelevant or distracting search results while performing research or browsing. The extension works only on the client side and does not store or transmit any data.

## Features

– A “Hide” button is added to every Google search result
– Works with dynamically loaded results that appear while scrolling
– No user data is collected or saved
– No external communication or tracking
– Runs entirely in the browser
– Requires no special permissions beyond access to Google Search pages

## How it Works

A content script scans the Google Search results page, identifies result blocks, and inserts a small “Hide” button at the top of each block. When the user clicks the button, the block is removed from the page.
The script continues to run periodically to support new results that appear as Google updates the page in real time.

## Project Structure

manifest.json – Extension configuration
content.js – Main script injected into Google Search pages
assets/ – Images such as icons and screenshots

## Installation (Developer Mode)

1. Download or clone this repository
2. Open chrome://extensions
3. Enable Developer Mode
4. Select “Load unpacked”
5. Choose the project folder

## Privacy

The extension operates entirely on the client side.
It does not collect, store, log, or send any information.
All functionality is limited to adding and removing elements within the Google Search results page.

## License

This project is provided under the MIT license.
