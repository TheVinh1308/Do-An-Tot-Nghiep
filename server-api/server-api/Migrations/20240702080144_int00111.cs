using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server_api.Migrations
{
    public partial class int00111 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_NotificationsAdmins_Invoices_InvoiceId",
                table: "NotificationsAdmins");

            migrationBuilder.DropIndex(
                name: "IX_NotificationsAdmins_InvoiceId",
                table: "NotificationsAdmins");

            migrationBuilder.RenameColumn(
                name: "InvoiceId",
                table: "NotificationsAdmins",
                newName: "itemId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "itemId",
                table: "NotificationsAdmins",
                newName: "InvoiceId");

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
    }
}
