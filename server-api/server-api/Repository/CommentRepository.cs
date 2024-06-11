using API_Server.Models;
using Microsoft.EntityFrameworkCore;
using server_api.Data;
using server_api.Interface;

namespace server_api.Repository
{
    public class CommentRepository : ICommentRepository
    {

        private readonly EPhoneShopIdentityContext _context;

        public CommentRepository(EPhoneShopIdentityContext context, IWebHostEnvironment environment)
        {
            _context = context;
        }

        public async Task DeleteCommentAsync(int commentId)
        {
            var comment = _context.Comments.SingleOrDefault(x => x.Id == commentId);
            if (comment != null)
            {
                _context.Comments.Remove(comment);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<Comment>> GetAllCommentAsync()
        {
            var comments = await _context.Comments.ToListAsync();
            return comments;
        }

        public async Task<Comment> GetCommentAsync(int id)
        {
            var comment = await _context.Comments.SingleOrDefaultAsync(x => x.Id == id);
            return comment;
        }

        public async Task<List<Comment>> GetCommentByModPhoneAsync(int modPhoneId)
        {
            var comments = await _context.Comments.Include(c => c.User).Where(c => c.ModPhoneId == modPhoneId).ToListAsync();
            return comments;
        }

        public async Task<Comment> InsertCommentAsync(Comment comment)
        {
            _context.Comments.Add(comment);
            await _context.SaveChangesAsync();
            return comment;
        }

        public async Task UpdateCommentAsync(int commentId, Comment comment)
        {
            if (commentId == comment.Id)
            {

                _context.Comments.Update(comment);
                await _context.SaveChangesAsync();
            }
        }
    }
}
