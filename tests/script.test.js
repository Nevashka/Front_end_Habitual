/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
global.fetch = require('jest-fetch-mock');
let app;

describe('app', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        app = require('../static/js/script')
    })

    afterEach(() => {
        fetch.resetMocks();
    })

    describe('requests', () => {
        describe('fetchAll', () => {
            test('it makes a get request to /habits', () => {
                app.fetchAll();
                expect(fetch).toHaveBeenCalled()
            })
        })
    })

    describe('showAll', () => {
        test('adds multiple entries to the page', () => {

            const fakeAPI = [
                { habit_name: "Test", frequency_done : 0, frequency: 2 },
                { habit_name: "Test 2", frequency_done : 2, frequency: 2 },
            ]
            app.showAll(fakeAPI)
            const entryCount = document.querySelectorAll('.habit').length
            expect(entryCount).toBe(2)
        })
    })
})
