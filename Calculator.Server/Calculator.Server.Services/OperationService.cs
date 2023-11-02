using Calculator.Server.Data;
using Calculator.Server.Domain;
using Calculator.Server.Services.Dtos;
using Calculator.Server.Services.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Calculator.Server.Services
{
    public class OperationService : IOperationService
    {
        private readonly AppDbContext context;
        public OperationService(AppDbContext Context)
        {
            context = Context;
        }

        public async Task<Result<string>> AddOperation(OperationRequestModel operationModel)
        {
            var oepration = new Operation
            {
                Expression = operationModel.Expression,
                Result = operationModel.Result,
                CreatedOn = DateTime.Now
            };

            context.Operations.Add(oepration);

            if(await context.SaveChangesAsync() > 0)
            {
                return Result<string>.Success("operation saved");
            }

            return Result<string>.Failure("failed to save operation");
        }

        public async Task<Result<List<Operation>>> GetOperations()
        {
            return Result<List<Operation>>.Success(await context.Operations.ToListAsync());
        }

    }
}
