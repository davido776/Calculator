namespace Calculator.Server.Domain
{
    public class Operation : BaseEntity
    {
        public string Expression { get; set; }

        public decimal Result { get; set; }

    }
}
