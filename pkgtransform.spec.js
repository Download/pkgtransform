var pkgtransform = require('../pkgtransform');
var expect = require('chai').expect;

describe('pkgtransform', function(){
	it('is a function', function(){
		expect(pkgtransform).to.be.a('function');
	});
	it('returns an object', function(){
		expect(pkgtransform()).to.be.an('object');
	});
	it('accepts a string or array of strings as parameter', function(){
		expect(pkgtransform('keywords')).to.be.an('array');
		expect(pkgtransform(['keywords'])).to.be.an('array');
	});
	it('returns an object representation of package.json when given no arguments', function(){
		var pkg = pkgtransform();
		expect(pkg).to.have.a.property('name');
		expect(pkg.name).to.equal('pkgtransform');
		expect(pkg).to.have.a.property('version');
		expect(pkg).to.have.a.property('description');
	});
	it('returns a subtree from package.json when given an argument', function(){
		var keywords = pkgtransform('keywords');
		expect(keywords).to.be.an('array');
	});
});