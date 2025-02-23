﻿using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using static server_api.Repository.InvoiceDetailRepository;

namespace server_api.Interface
{
    public interface IInvoiceDetailRepository
    {
        Task DeleteInvoiceDetailAsync(int invoiceDetailId);
        Task<List<InvoiceDetail>> GetAllInvoiceDetailAsync();
        Task<InvoiceDetail> GetInvoiceDetailAsync(int id);
        Task<InvoiceDetail> InsertnvoiceDetailAsync([FromForm] InvoiceDetail invoiceDetail);
        Task UpdateInvoiceDetailAsync(int invoiceDetailId, InvoiceDetail invoiceDetail);
        Task<List<InvoiceDetail>> GetInvoiceDetailByInvoiceIdAsync(int invoiceId);

        // lấy theo ngày
        Task<List<TopSellingInvoiceDetail>> GetTopSellInvoiceDetailAsync();
        // Lấy theo tháng
        Task<List<TopSellingInvoiceDetail>> GetTopSellInvoiceDetailByMonthAsync();
        // Lấy theo năm
        Task<List<TopSellingInvoiceDetail>> GetTopSellInvoiceDetailByYearAsync();

        // Lấy theo ngày
        Task<List<TopSellingInvoiceDetail>> GetTopSellInvoiceDetaiByBrandlAsync();
        // Lấy theo tháng
        Task<List<TopSellingInvoiceDetail>> GetTopSellInvoiceDetaiByBrandlForMonthAsync();

        // Lấy theo năm
        Task<List<TopSellingInvoiceDetail>> GetTopSellInvoiceDetaiByBrandlForYearAsync();
        // Lấy theo ngày
        Task<int> TotalPriceAsync();
        // Lấy theo tháng
        Task<int> TotalPriceMonthAsync();
        // Lấy theo năm
        Task<int> TotalPriceYearAsync();

        // doanh thu các ngày tron tuần
        Task<decimal[]> GetWeeklySalesAsync();

        // Doanh thu các tháng trong năm
        Task<decimal[]> GetMonthlySalesAsync();
    }
}
