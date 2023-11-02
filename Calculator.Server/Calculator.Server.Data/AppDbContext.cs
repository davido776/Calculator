﻿using Calculator.Server.Domain;
using Microsoft.EntityFrameworkCore;

namespace Calculator.Server.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Operation> Operations { get; set; }
    }
}
