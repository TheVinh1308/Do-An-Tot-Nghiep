using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server_api.Migrations
{
    public partial class int04 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_Phones_PhoneId",
                table: "Comments");

            migrationBuilder.DropForeignKey(
                name: "FK_Favorites_Phones_PhoneId",
                table: "Favorites");

            migrationBuilder.DropForeignKey(
                name: "FK_Votes_Phones_PhoneId",
                table: "Votes");

            migrationBuilder.RenameColumn(
                name: "PhoneId",
                table: "Votes",
                newName: "ModPhoneId");

            migrationBuilder.RenameIndex(
                name: "IX_Votes_PhoneId",
                table: "Votes",
                newName: "IX_Votes_ModPhoneId");

            migrationBuilder.RenameColumn(
                name: "PhoneId",
                table: "Favorites",
                newName: "ModPhoneId");

            migrationBuilder.RenameIndex(
                name: "IX_Favorites_PhoneId",
                table: "Favorites",
                newName: "IX_Favorites_ModPhoneId");

            migrationBuilder.RenameColumn(
                name: "PhoneId",
                table: "Comments",
                newName: "ModPhoneId");

            migrationBuilder.RenameIndex(
                name: "IX_Comments_PhoneId",
                table: "Comments",
                newName: "IX_Comments_ModPhoneId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_ModPhones_ModPhoneId",
                table: "Comments",
                column: "ModPhoneId",
                principalTable: "ModPhones",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Favorites_ModPhones_ModPhoneId",
                table: "Favorites",
                column: "ModPhoneId",
                principalTable: "ModPhones",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Votes_ModPhones_ModPhoneId",
                table: "Votes",
                column: "ModPhoneId",
                principalTable: "ModPhones",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_ModPhones_ModPhoneId",
                table: "Comments");

            migrationBuilder.DropForeignKey(
                name: "FK_Favorites_ModPhones_ModPhoneId",
                table: "Favorites");

            migrationBuilder.DropForeignKey(
                name: "FK_Votes_ModPhones_ModPhoneId",
                table: "Votes");

            migrationBuilder.RenameColumn(
                name: "ModPhoneId",
                table: "Votes",
                newName: "PhoneId");

            migrationBuilder.RenameIndex(
                name: "IX_Votes_ModPhoneId",
                table: "Votes",
                newName: "IX_Votes_PhoneId");

            migrationBuilder.RenameColumn(
                name: "ModPhoneId",
                table: "Favorites",
                newName: "PhoneId");

            migrationBuilder.RenameIndex(
                name: "IX_Favorites_ModPhoneId",
                table: "Favorites",
                newName: "IX_Favorites_PhoneId");

            migrationBuilder.RenameColumn(
                name: "ModPhoneId",
                table: "Comments",
                newName: "PhoneId");

            migrationBuilder.RenameIndex(
                name: "IX_Comments_ModPhoneId",
                table: "Comments",
                newName: "IX_Comments_PhoneId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_Phones_PhoneId",
                table: "Comments",
                column: "PhoneId",
                principalTable: "Phones",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Favorites_Phones_PhoneId",
                table: "Favorites",
                column: "PhoneId",
                principalTable: "Phones",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Votes_Phones_PhoneId",
                table: "Votes",
                column: "PhoneId",
                principalTable: "Phones",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
