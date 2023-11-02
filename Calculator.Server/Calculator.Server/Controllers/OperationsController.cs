using Calculator.Server.Services;
using Calculator.Server.Services.Dtos;
using Calculator.Server.Services.Interface;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Calculator.Server.Controllers
{
    public class OperationsController : BaseController
    {
        private readonly IOperationService operationService;
        public OperationsController(IOperationService OperationService)
        {
            operationService = OperationService;
        }

        [HttpPost]
        public async Task<IActionResult> AddOperation([FromBody] OperationRequestModel request)
        {
            return HandleResult(await operationService.AddOperation(request));
        }

        [HttpGet]
        public async Task<IActionResult> GetOperations()
        {
            return HandleResult(await operationService.GetOperations());
        }
    }
}
