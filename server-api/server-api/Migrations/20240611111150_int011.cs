using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server_api.Migrations
{
    public partial class int011 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "EndDay",
                table: "Promotions",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Promotions",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "StartDay",
                table: "Promotions",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EndDay",
                table: "Promotions");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Promotions");

            migrationBuilder.DropColumn(
                name: "StartDay",
                table: "Promotions");
        }
    }
}
