/**
    Removes a number of objects from the array
*/
Array.prototype.remove = function(/**Number*/ from, /**Number*/ to)
{
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

/**
    Removes a specific object from the array
*/
Array.prototype.removeObject = function(object)
{
    for (var i = 0; i < this.length; ++i)
    {
        if (this[i] == object)
        {
            this.remove(i);
            break;
        }
    }
}