function Enum()
{
    this.enums = [];
    this.lookups = {};

    this.length = this.enums.length;

    this.addEnum = function(e)
    {
        this.enums.push(e);
        this.length++;
    }

    this.getByName = function(name)
    {
        return this[name];
    }

    this.getByValue = function(field, value)
    {
        var lookup = this.lookups[field];
        if (lookup)
        {
            return lookup[value];
        }
        else
        {
            this.lookups[field] = (lookup = {});
            var k = this.enums.length - 1;
            for (; k >= 0; --k)
            {
                var m = this.enums[k];
                var j = m[field];
                lookup[j] = m;
                if (j == value)
                {
                    return m;
                }
            }
        }
        return null;
    }

    this.forEach = function(callback)
    {
        for (var i = 0; i < this.enums.length; i++)
            callback(this.enums[i]);
    }
}

function DefineEnum(definition)
{
    var k;
    var e = new Enum();
    for (k in definition)
    {
        var j = definition[k];
        e[k] = j;
        e.addEnum(j)
    }
    return e;
}