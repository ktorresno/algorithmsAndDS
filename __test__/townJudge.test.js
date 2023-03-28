const findJudge = require('../townJudge');

test('When in the town there are 4 people and one of them is the town judge', () => {
    const trust = [[1,2],[1,3],[2,1],[2,3],[1,4],[4,3],[4,1]] ;
    const N = 4;
    expect(findJudge(N, trust)).toEqual(3);
});

test("When in the town there are 4 people and there's a town judge", () => {
    const trust = [[1,3],[1,4],[2,3],[2,4],[4,3]] ;
    const N = 4;
    expect(findJudge(N, trust)).toEqual(3);
});

test("When in the town there are 3 people and there's no town judge", () => {
    const trust = [[1,2],[2,3]] ;
    const N = 3;
    expect(findJudge(N, trust)).toEqual(-1);
});

test("When in the town there are 3 people and there's no town judge because all of them are trusted people", () => {
    const trust = [[1,3],[2,3],[3,1]] ;
    const N = 3;
    expect(findJudge(N, trust)).toEqual(-1);
});

test("When in the town there are 3 people and there's a town judge because N - 1 trust one person", () => {
    const trust = [[1,3],[2,3]] ;
    const N = 3;
    expect(findJudge(N, trust)).toEqual(3);
}); 

test("When in the town there are 2 people and there's a town judge", () => {
    const trust = [[1,2]] ;
    const N = 2;
    expect(findJudge(N, trust)).toEqual(2);
});