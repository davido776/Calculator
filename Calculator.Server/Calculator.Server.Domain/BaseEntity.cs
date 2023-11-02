using System;

namespace Calculator.Server.Domain
{
    public class BaseEntity
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public DateTime CreatedOn { get; set; }
    }
}
