function List()
{
    this.items = [];
    this.length = this.items.length;

    this.hasValue = function(obj)
    {
        return (((typeof (obj) == 'undefined') || (obj == null)) == false);
    }

    this.item = function(index, obj)
    {

        if (this.hasValue(obj))
            this.items[index] = obj;
        else
            return this.items[index];
    }

    this.contains = function(obj)
    {
        if (this.items.length > 0)
        {
            for (var i = 0; i < this.items.length; i++)
            {
                if (this.items[i] == obj)
                    return true;
            }
        }

        return false;
    }

    this.property = function(index, pro, value)
    {
        if (this.hasValue(value))
            this.items[index][pro] = value;
        else
            return this.items[index][pro];
    }

    this.extend = function(index, obj)
    {
        var key;
        for (key in obj)
        {
            this.property(index, key, obj[key]);
        }
    }

    this.add = function(obj)
    {
        this.items[this.items.length] = obj;
        this.length = this.items.length;
    }

    this.addRange = function(objArray)
    {
        var i = 0;
        for (i = 0; i < objArray.length; i++)
        {
            this.items[this.items.length] = objArray[i];
        };

        this.length = this.items.length;
    }

    this.insert = function(obj, index)
    {
        if (this.items.length > 0)
        {
            var i = 0;
            for (i = this.items.length; i > index; i--)
            {
                this.items[i] = this.items[(i - 1)];
            };
            this.items[index] = obj;
        } 
        else
        {
            this.items[0] = obj;
        };

        this.length = this.items.length;
    }

    this.isEqual = function(a, b)
    {
        return (a === b);
    }

    this.find = function(obj)
    {
        var result = -1;
        var i = 0;
        for (i = 0; i < this.items.length; i++)
        {
            if (this.isEqual(this.items[i], obj))
            {
                result = i;
                break;
            };
        };
        return result;
    }

    this.clear = function()
    {
        this.items = [];
        this.length = this.items.length;
    }

    this.remove = function(obj)
    {
        var tmp = [], i = 0, j = 0;
        for (i = 0; i < this.items.length; i++)
        {
            if (!this.isEqual(this.items[i], obj))
            {
                tmp[j++] = this.items[i];
            };
        };
        this.clear();
        this.items = tmp;

        this.length = this.items.length;
    }

    this.removeAt = function(index)
    {
        this.remove(this.items[index]);
        this.length = this.items.length;
    }

    this.join = function(seprator, pro)
    {
        var i = 0;
        var result = "";
        var count = this.items.length;
        for (i = 0; i < count; i++)
        {
            if (i == (count - 1))
            {
                result += (this.hasValue(pro)) ? this.items[i][pro] : this.items[i];
            } else
            {
                result += (this.hasValue(pro)) ? this.items[i][pro] : this.items[i];
                result += seprator;
            };
        };

        this.length = this.items.length;
        return result;
    }

    this.forEach = function(callback)
    {
        for (var i = 0; i < this.items.length; i++)
            callback(this.items[i]);
    }
}