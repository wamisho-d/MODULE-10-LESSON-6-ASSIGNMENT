// Task 1:  Obtaining API Key and Configuration
// File: marvelApp.js

const API_KEY = 'your_public_api_key_here'; // Replace with your actual API key
const BASE_URL = 'https://gateway.marvel.com/v1/public/characters';

// Task 2: Fetching Characters Using Fetch API
async function fetchMarvelCharacters() {
    const url = `${BASE_URL}? apikey=${API_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);            
        }
        const data = await response.json();
        console.log('Fetched Character:', data.data.results);
        return data.data.results;        
    } catch (error) {
        console.error('Error fetching Marvel characters:', error);
        return null;
    }
}

// Task 3: Updating User Iterface Dynamically
function updateUIWithCharacters(characters) {
    const charactersContainer = document.getElementById('characters-container');
    charactersContainer.innerHTML = ''; // Clear existing content

    if (characters && characters.length > 0) {
        characters.forEach(character => {
            const characterElement = document.createElement('div');
            characterElement.className = 'character';

            const nameElement = document.createElement('h2');
            nameElement.textContent = character.name;

            const thumbnailElement = document.createElement('img');
            thumbnialElement.src = `${character.thumbnail.path}.${character.thumbnail.extension}`;
            thumbnailElement.alt = `{character.name} thumbnail`;

            characterElement.appendchild(thumbnialElement);
            characterElement.appendchild(nameElement);
            characterElement.appendchild(characterElement);
       
        });
    } else {
        charactersContainer.textContent = 'No characters found';

    }

}
// main function to fetch characters and update the UI
async function loadMarvelCharacters() {
    const characters = await fetchMarvelCharacters();
    updateUIWithCharacters(characters);

}

// Trgger the main function on page load or on a specific event
document.addEventListener('DOMContentLoaded', loadMarvelCharacters);


