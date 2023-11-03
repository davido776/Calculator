using Calculator.Server.Domain;
using Calculator.Server.Services.Dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Calculator.Server.Services.Interface
{
    public interface IOperationService
    {
        Task<Result<string>> AddOperation(OperationRequestModel operationModel);

        Task<Result<List<Operation>>> GetOperations();

        Task<Result<string>> DeleteOperations();
    }
}
