
const { game, buildBoard } = require("./game");


beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});
describe("game object contains correct keys", () => {
        test("score key exists", () => {
        expect("score" in game).toBe(true);
        });
         test("img exists", () => {
            expect(document.getElementsByTagName("img").innerText).toEqual[0];
        });
        test("should display 0 for the element with id of score", () => {
            expect(game.score).toEqual(0);
        });
        
        });
    




