using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace ReduxObservableExampleBackend.Controllers
{
    public class GroupValue
    {
        public string Key { get; set; }
        public int Value { get; set; }
    }

    [Authorize]
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        private static List<GroupValue> _groups = new List<GroupValue>
        {
            new GroupValue { Key = "Hello", Value = 1 },
            new GroupValue { Key = "Zero" }
        };

        [HttpGet]
        [Route("all")]
        public IEnumerable<GroupValue> Get()
        {
            return _groups;
        }

        [HttpPost]
        [Route("increment/{key}")]
        public void Increment(string key)
        {
            var group = _groups.Single(g => g.Key == key);
            group.Value++;
        }

        [HttpPost]
        [Route("decrement/{key}")]
        public void Decrement(string key)
        {
            var group = _groups.Single(g => g.Key == key);
            group.Value--;
        }
    }
}
