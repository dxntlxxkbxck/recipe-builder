import test from 'node:test';
import assert from 'node:assert/strict';

import add from '../src/commands/add.js';
import remove from '../src/commands/remove.js';
import replace from '../src/commands/replace.js';
import exists from '../src/commands/exists.js';
import listCmd from '../src/commands/list.js';
import unique from '../src/commands/unique.js';
import sortRecipe from '../src/commands/sort.js';
import merge from '../src/commands/merge.js';
import findCmd from '../src/commands/find.js';
import stringify from '../src/commands/stringify.js';
import undo from '../src/commands/undo.js';

test('step1', () => {
	// add
	const r = [];
	const r2 = add(r, 'milk');
	console.log('add input:', r, 'ingredient: milk -> output:', r2);
	assert.deepEqual(r, []);
	assert.deepEqual(r2, ['milk']);

	// remove
	const res = remove(['a', 'b', 'a'], 'a');
	console.log("remove(['a','b','a'], 'a') ->", res);
	assert.deepEqual(res, ['b', 'a']);
	const res2 = remove(['a'], 'x');
	console.log("remove(['a'], 'x') ->", res2);
	assert.deepEqual(res2, ['a']);

	// replace
	const rep = replace(['a', 'b'], 'a', 'x');
	console.log("replace(['a','b'], 'a','x') ->", rep);
	assert.deepEqual(rep, ['x', 'b']);
	const rep2 = replace(['a'], 'z', 'y');
	console.log("replace(['a'], 'z','y') ->", rep2);
	assert.deepEqual(rep2, ['a']);
});

test('step2', () => {
	console.log("exists(['x'],'x') ->", exists(['x'], 'x'));
	console.log("exists(['x'],'y') ->", exists(['x'], 'y'));
	assert.equal(exists(['x'], 'x'), true);
	assert.equal(exists(['x'], 'y'), false);

	const out = listCmd(['eggs', 'milk']);
	console.log("list(['eggs','milk']) ->\n", out.join('\n'));
	assert.deepEqual(out, ['1. eggs', '2. milk']);

	const s = stringify(['m', 'n']);
	console.log("stringify(['m','n']) ->", s);
	assert.equal(s, 'm, n');
});

test('step3', () => {
	const u = unique(['a', 'b', 'a', 'c', 'b']);
	console.log("unique(['a','b','a','c','b']) ->", u);
	assert.deepEqual(u, ['a', 'b', 'c']);

	const asc = sortRecipe(['b', 'a', 'c'], 'asc');
	console.log("sort(['b','a','c'],'asc') ->", asc);
	assert.deepEqual(asc, ['a', 'b', 'c']);
	const desc = sortRecipe(['b', 'a', 'c'], 'desc');
	console.log("sort(['b','a','c'],'desc') ->", desc);
	assert.deepEqual(desc, ['c', 'b', 'a']);

	const same = ['b', 'a'];
	const res = sortRecipe(same, 'unknown');
	console.log("sort(['b','a'],'unknown') ->", res);
	assert.deepEqual(res, same);
});

test('step4', () => {
	const merged = merge(['a'], 'b, c');
	console.log("merge(['a'], 'b, c') ->", merged);
	assert.deepEqual(merged, ['a', 'b', 'c']);

	const src = ['Milk', 'Sugar', 'Almond milk'];
	const found = findCmd(src, 'milk');
	console.log("find(['Milk','Sugar','Almond milk'],'milk') ->", found);
	assert.deepEqual(found, ['Milk', 'Almond milk']);
	const none = findCmd(src, 'zzz');
	console.log("find(...,'zzz') ->", none);
	assert.deepEqual(none, []);
});

test('step5', () => {
	const hist = [['a'], ['a', 'b']];
	const u = undo(hist);
	console.log('undo history', hist, '->', u);
	assert.deepEqual(u, ['a', 'b']);
	const empty = undo([]);
	console.log('undo empty ->', empty);
	assert.equal(empty, null);
});
