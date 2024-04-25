using API_Server.Models;

namespace server_api.Interface
{
    public interface ICommentRepository
    {
         Task DeleteCommentAsync(int commentId);
        Task<List<Comment>> GetAllCommentAsync();
        Task<Comment> GetCommentAsync(int id);
        Task<Comment> InsertCommentAsync(Comment comment);
        Task UpdateCommentAsync(int commentId, Comment comment);

    }
}
