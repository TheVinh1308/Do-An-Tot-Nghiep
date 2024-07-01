using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server_api.Migrations
{
    public partial class int010 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "InvoiceId",
                table: "NotificationsAdmins",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "time",
                table: "NotificationsAdmins",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.CreateIndex(
                name: "IX_NotificationsAdmins_InvoiceId",
                table: "NotificationsAdmins",
                column: "InvoiceId");

            migrationBuilder.AddForeignKey(
                name: "FK_NotificationsAdmins_Invoices_InvoiceId",
                table: "NotificationsAdmins",
                column: "InvoiceId",
                principalTable: "Invoices",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_NotificationsAdmins_Invoices_InvoiceId",
                table: "NotificationsAdmins");

            migrationBuilder.DropIndex(
                name: "IX_NotificationsAdmins_InvoiceId",
                table: "NotificationsAdmins");

            migrationBuilder.DropColumn(
                name: "InvoiceId",
                table: "NotificationsAdmins");

            migrationBuilder.DropColumn(
                name: "time",
                table: "NotificationsAdmins");
        }
    }
}
