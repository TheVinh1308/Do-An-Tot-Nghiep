-- ============== SELECT DATABASE ===================================
use DB_DoAnTotNghiep

-- ========== XOÁ CÁC BẢNG TRƯỚC KHI INSSERT DỮ LIỆU ===================
delete from Brands
DBCC CHECKIDENT ('DB_DoAnTotNghiep.dbo.Brands', RESEED, 0);
go

delete from AspNetUsers
DBCC CHECKIDENT ('DB_DoAnTotNghiep.dbo.AspNetUsers', RESEED, 0);
go

delete from InvoiceDetails
DBCC CHECKIDENT ('DB_DoAnTotNghiep.dbo.InvoiceDetails', RESEED, 0);
go

delete from Invoices
DBCC CHECKIDENT ('DB_DoAnTotNghiep.dbo.Invoices', RESEED, 0);
go

delete from InvoiceDetails
DBCC CHECKIDENT ('DB_DoAnTotNghiep.dbo.InvoiceDetails', RESEED, 0);
go

delete from ModPhones
DBCC CHECKIDENT ('DB_DoAnTotNghiep.dbo.ModPhones', RESEED, 0);
go

delete from Promotions
DBCC CHECKIDENT ('DB_DoAnTotNghiep.dbo.Promotions', RESEED, 0);
go

delete from Phones
DBCC CHECKIDENT ('DB_DoAnTotNghiep.dbo.Phones', RESEED, 0);
go

delete from Images
DBCC CHECKIDENT ('DB_DoAnTotNghiep.dbo.Images', RESEED, 0);
go

-- ============================ BRAND ==============================
-- BRAND APPLE
insert into Brands values ( 'iPhone', 'iPhone.png', 1, GETDATE())
-- BRAND SAMSUNG
insert into Brands values ( 'Samsung', 'Samsung.png', 1, GETDATE())
-- BRAND VIVO
insert into Brands values ( 'Vivo', 'Vivo.png', 1, GETDATE())
-- BRAND OPPO
insert into Brands values ( 'Oppo', 'Oppo.png', 1, GETDATE())
-- BRAND XIAOMI
insert into Brands values ( 'Xiaomi', 'Xiaomi.png', 1, GETDATE())
-- BRAND HUAWEI
insert into Brands values ( 'Huawei', 'Huawei.png', 1, GETDATE())

-- =========================== PROMOTION =============================
SET IDENTITY_INSERT Promotions OFF
insert into Promotions values (N'Mặc định',N'Không khuyến mãi', 0,GETDATE(), GETDATE(),1)
SET IDENTITY_INSERT Promotions ON



-- ========================== HISTORYS ==============================
-- =========================== MODPHONE =============================
-- MOD PHONE IPHONE
insert into ModPhones values(  'IPhone 15 Promax', 6.1, N'iPhone 15 Pro Max là một chiếc điện thoại thông minh cao cấp được mong đợi nhất năm 2023. 
								Với nhiều tính năng mới và cải tiến, iPhone 15 Pro Max chắc chắn sẽ là một lựa chọn tuyệt vời cho những người dùng đang
								tìm kiếm một chiếc điện thoại có hiệu năng mạnh mẽ, camera chất lượng và thiết kế sang trọng.', 8,1, 'iOS 17', N'Apple', '4422','iphone-15-pro-max-titan-black.jpg',1,1 );
insert into ModPhones values(  'IPhone 15 Pro', 6.1, N'iPhone 15 Pro là một trong những chiếc điện thoại thông minh được mong đợi nhất năm 2023. Với nhiều 
								tính năng mới và cải tiến, iPhone 15 Pro chắc chắn sẽ là một lựa chọn tuyệt vời cho những người dùng đang tìm kiếm một chiếc 
								điện thoại cao cấp.', 8,1, 'iOS 17', N'Apple', '3274','iphone-15-pro-white-1.jpg',1,1 );
insert into ModPhones values(  'IPhone 15 Plus', 6.7, N'iPhone 15 Plus thu hút mọi ánh nhìn ngay khi ra mắt nhờ có vẻ ngoài cao cấp, 
								trang bị bộ xử lý mạnh mẽ, cụm camera kép đặc trưng cho khả năng chụp ảnh cực nét cùng màn hình chất lượng cao, 
								để bạn tận hưởng trải nghiệm sử dụng tuyệt vời. ', 8,1, 'iOS 17', N'Apple', '4383','iphone-15-plus-green.jpg',1,1 );
insert into ModPhones values(  'IPhone 15 ', 6.1, N'iPhone 15 128GB là mẫu điện thoại cao cấp được Apple cho ra mắt vào tháng 09/2023, 
								máy nhận được nhiều sự chú ý đến từ người dùng khi mang trong mình bộ cấu hình cực khủng, vẻ ngoài thu hút
								cùng khả năng quay video - chụp ảnh đỉnh cao.', 8,1, 'iOS 17', N'Apple', '3349','iphone-15-yellow.jpg',1,1 );
insert into ModPhones values(  'IPhone 14 Promax ', 6.7, N'iPhone 14 Pro Max một siêu phẩm trong giới smartphone được nhà Táo tung ra thị trường vào tháng 09/2022. 
								Máy trang bị con chip Apple A16 Bionic vô cùng mạnh mẽ, đi kèm theo đó là thiết kế màn hình mới, hứa hẹn mang lại những trải 
								nghiệm đầy mới mẻ cho người dùng iPhone.', 8,1, 'iOS 16', N'Apple', '4323','iphone-14-pro-max-sliver.jpg',1,1 );
insert into ModPhones values(  'IPhone 14 Pro ', 6.7, N'iPhone 14 Pro Max một siêu phẩm trong giới smartphone được nhà Táo tung ra thị trường vào tháng 09/2022. 
								Máy trang bị con chip Apple A16 Bionic vô cùng mạnh mẽ, đi kèm theo đó là thiết kế màn hình mới, hứa hẹn mang lại những trải 
								nghiệm đầy mới mẻ cho người dùng iPhone.', 8,1, 'iOS 16', N'Apple', '4323','iphone-14-pro-max-sliver.jpg',1,1 );
insert into ModPhones values(  'IPhone 14 Plus ', 6.7, N'Sau nhiều thế hệ điện thoại của Apple thì cái tên “Plus” cũng đã chính thức trở lại vào năm 2022 
								và xuất hiện trên chiếc iPhone 14 Plus 128GB, nổi trội với ngoại hình bắt trend cùng màn hình kích thước lớn để đem đến không gian 
								hiển thị tốt hơn cùng cấu hình mạnh mẽ không đổi so với bản tiêu chuẩn.', 6,1, 'iOS 16', N'Apple', '4325','iphone-14-plus-yellow.jpg',1,1 );
insert into ModPhones values(  'IPhone 14', 6.1, N'iPhone 14 128GB được xem là mẫu smartphone bùng nổ của nhà táo trong năm 2022, ấn tượng với ngoại hình trẻ trung, màn hình chất 
								lượng đi kèm với những cải tiến về hệ điều hành và thuật toán xử lý hình ảnh, giúp máy trở thành cái tên thu hút được đông đảo người dùng quan tâm 
								tại thời điểm ra mắt.', 6,1, 'iOS 16', N'Apple', '4379','iphone-14-purple.jpg',1,1 );
insert into ModPhones values(  'IPhone 13 Promax', 6.7, N'Điện thoại iPhone 13 Pro Max 128 GB - siêu phẩm được mong chờ nhất ở nửa cuối năm 2021 đến từ Apple. Máy có thiết kế
								không mấy đột phá khi so với người tiền nhiệm, bên trong đây vẫn là một sản phẩm có màn hình siêu đẹp, tần số quét được nâng cấp lên 120 Hz mượt mà, 
								cảm biến camera có kích thước lớn hơn, cùng hiệu năng mạnh mẽ với sức mạnh đến từ Apple A15 Bionic, sẵn sàng cùng bạn chinh phục mọi thử thách.', 6,1, 'iOS 15', N'Apple', '4352','iphone-13-pro-max-xanh-la.jpg',1,1 );
insert into ModPhones values(  'IPhone 13 Pro', 6.1, N'Mỗi lần ra mắt phiên bản mới là mỗi lần iPhone chiếm sóng trên khắp các mặt trận và lần này cái tên khiến vô số người "sục sôi" là iPhone 13 Pro,
								chiếc điện thoại thông minh vẫn giữ nguyên thiết kế cao cấp, cụm 3 camera được nâng cấp, cấu hình mạnh mẽ cùng thời lượng pin lớn ấn tượng. ', 6,1, 'iOS 15', N'Apple', '3095','iphone-13-pro-blue-3.jpg',1,1 );
insert into ModPhones values(  'IPhone 13 ', 6.1, N'Apple thỏa mãn sự chờ đón của iFan và người dùng với sự ra mắt của iPhone 13. Dù ngoại hình không có nhiều thay đổi so với iPhone 12 nhưng với cấu hình mạnh mẽ hơn, 
								đặc biệt pin “trâu” hơn và khả năng quay phim chụp ảnh cũng ấn tượng hơn, hứa hẹn mang đến những trải nghiệm thú vị trên phiên bản mới này.', 4,1, 'iOS 15', N'Apple', '3240','iphone-13-hong.jpg',1,1 );
insert into ModPhones values(  'IPhone 12 Promax ', 6.7, N'iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt
								nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.', 6,1, 'iOS 15', N'Apple', '3687','iphone-12-pro-max-gold.jpg',1,1 );
insert into ModPhones values(  'IPhone 12 Pro ', 6.1, N'iPhone 12 Pro - "Siêu phẩm công nghệ" với nhiều nâng cấp mạnh
								mẽ về thiết kế, cấu hình và hiệu năng, khẳng định đẳng cấp thời thượng trên thị trường smartphone cao cấp.', 6,1, 'iOS 15', N'Apple', '2815','iphone-12-pro-sliver-2.jpg',1,1 );
insert into ModPhones values(  'IPhone 12 ', 6.1, N'Trong những tháng cuối năm 2020, Apple đã chính thức giới thiệu đến người dùng cũng như iFan thế hệ iPhone 12 series mới với hàng loạt tính năng bứt phá, 
								thiết kế được lột xác hoàn toàn, hiệu năng đầy mạnh mẽ và một trong số đó chính là iPhone 12 64GB.', 4,1, 'iOS 15', N'Apple', '2815','iphone-12-tim.jpg',1,1 );
insert into ModPhones values(  'IPhone 11 Promax ', 6.5, N'Trong năm 2019 thì chiếc smartphone được nhiều người mong muốn sở hữu trên tay và sử dụng nhất không ai khác chính là iPhone 11 Pro Max 64GB 
								tới từ nhà Apple.', 4,1, 'iOS 14', N'Apple', '3969','iphone-11-pro-max-gold.jpg',1,1 );
insert into ModPhones values(  'IPhone 11 Pro ', 5.8, N'Nếu như bây giờ để lựa chọn một thiết bị có thể sử dụng ổn định và được cập nhật trong khoảng 3 năm nữa
								thì không có sự lựa chọn nào xuất sắc hơn chiếc iPhone 11 Pro 64GB, siêu phẩm mới được giới thiệu cách đây không lâu tới từ Apple.', 4,1, 'iOS 14', N'Apple', '3046','iphone-11-pro-gold.jpg',1,1 );
insert into ModPhones values(  'IPhone 11', 6.1, N'Apple đã chính thức trình làng bộ 3 siêu phẩm iPhone 11, trong đó phiên bản iPhone 11 64GB có mức giá rẻ nhất nhưng vẫn
								được nâng cấp mạnh mẽ như iPhone Xr ra mắt trước đó.', 4,1, 'iOS 15', N'Apple', '3110','iphone-11-red.jpg',1,1 );

-- MOD PHONE SAMSUNG
insert into ModPhones values(  'Galaxy S24 Ultra', 6.8, N'Samsung Galaxy S24 Ultra mẫu điện thoại cao cấp được ra mắt vào đầu năm 2024, sản phẩm tiếp tục kế thừa và cải tiến từ thế hệ trước. 
								Điểm đặc biệt là sử dụng chip Snapdragon 8 Gen 3 for Galaxy, camera 200 MP và tích hợp nhiều tính năng AI.', 12,2, 'Android', N'Snapdragon', '5000','samsung-s24ultra-violet-1.jpg',1,1 );
insert into ModPhones values(  'Galaxy S24 Plus', 6.7, N'Samsung đã cho ra mắt Samsung Galaxy S24+ 5G 256GB, chiếc điện thoại đẳng cấp của họ tại sự kiện hàng năm diễn ra vào ngày 18/01 tại Mỹ. Điểm độc đáo của sản phẩm nằm ở chip mới của Samsung,
								đi kèm với sự phát triển trong việc bổ sung nhiều tính năng thông minh có tích hợp AI và tăng cường khả năng chụp ảnh ở phần camera.', 12,2, 'Android', N'Exynos', '4900','samsung-s24plus-black-1.jpg',1,1 );
insert into ModPhones values(  'Galaxy S24', 6.2, N'Trong sự kiện Unpacked 2024 diễn ra vào ngày 18/01, Samsung đã chính thức ra mắt chiếc điện thoại Samsung Galaxy S24. Sản phẩm này mang đến nhiều cải tiến độc đáo, bao gồm việc sử dụng chip mới của Samsung,
								tích hợp nhiều tính năng thông minh sử dụng trí tuệ nhân tạo và cải thiện đáng kể hiệu suất chụp ảnh từ hệ thống camera.', 8,2, 'Android 14', N'Exynos', '4000','samsung-s24-gold-1.jpg',1,1 );
insert into ModPhones values(  'Galaxy S23 Ultra', 6.8, N'Samsung Galaxy S23 Ultra 5G 256GB là chiếc smartphone cao cấp nhất của nhà Samsung, sở hữu cấu hình không tưởng với con chip khủng được Qualcomm tối ưu riêng cho dòng Galaxy và camera lên đến 200 MP,
								xứng danh là chiếc flagship Android được mong đợi nhất trong năm 2023.', 8,2, 'Android 14', N'Exynos', '5000','samsung-s23ultra-cream-1.jpg',1,1 );
insert into ModPhones values(  'Galaxy S23 FE', 6.4, N'Nắm bắt xu hướng công nghệ, hãng đã trang bị cho Samsung Galaxy S23 FE 5G 256GB những tính năng độc đáo và mạnh mẽ bao gồm camera 
								50 MP có nhiều tính năng chụp ảnh, cấu hình mạnh nhờ chip Exynos 2200 và thiết kế bắt mắt.', 8,2, 'Android 13', N'Exynos', '4500','samsung-S23FE-violet-1.jpg',1,1 );
insert into ModPhones values(  'Galaxy S23', 6.1, N'Samsung Galaxy S23 5G 128GB chắc hẳn không còn là cái tên quá xa lạ đối với các tín đồ công nghệ hiện nay, được xem là một trong những gương mặt chủ chốt 
								đến từ nhà Samsung với cấu hình mạnh mẽ bậc nhất, camera trứ danh hàng đầu cùng lối hoàn thiện vô cùng sang trọng và hiện đại.', 8,2, 'Android', N'Snapdragon', '3900','samsung-s23-violet-1.jpg',1,1 );
insert into ModPhones values(  'Galaxy S22 Ultra', 6.8, N'Galaxy S22 Ultra 5G chiếc smartphone cao cấp nhất trong bộ 3 Galaxy S22 series mà Samsung đã cho ra mắt và lần nữa S22 Ultra 5G tiếp tục trở lại đầy ngoạn mục mang đến 1 diện mạo mới khi tích 
								hợp bút S Pen hoàn hảo trong thân máy, trang bị vi xử lý mạnh mẽ cho các tác vụ sử dụng vô cùng mượt mà và nổi bật hơn với cụm camera không viền độc đáo mang đậm dấu ấn riêng và có mức giá bán siêu hấp dẫn.', 8,2, 'Android 12', N'Snapdragon', '5000','samsung-s22ultra-green-1.jpg',1,1 );
insert into ModPhones values(  'Galaxy S22', 6.1, N'Samsung Galaxy S22 ra mắt với diện mạo vô cùng tinh tế và trẻ trung, mang trong mình thiết kế phẳng theo xu hướng thịnh hành, màn hình 120 Hz mượt mà,
								cụm camera AI 50 MP và bộ xử lý đến từ Qualcomm.', 8,2, 'Android 12', N'Snapdragon', '3700','samsung-s22-black-1.jpg',1,1 );
insert into ModPhones values(  'Samsung Galaxy Z Fold5', 7.6, N'Samsung Galaxy Z Fold5 là mẫu điện thoại cao cấp được ra mắt vào tháng 07/2023 với nhiều điểm đáng chú ý như thiết kế gập độc đáo,
								hiệu năng mạnh mẽ nhờ chip Snapdragon 8 Gen 2 for Galaxy cùng camera quay chụp sắc nét.', 12,2, 'Android', N'Snapdragon', '4400','samsung-zfold5-blue-1.jpg',1,1 );
insert into ModPhones values(  'Samsung Galaxy Z Fold4', 7.6, N'Tại sự kiện Samsung Unpacked thường niên, Samsung Galaxy Z Fold4 256GB chính thức được trình làng thị trường công nghệ, mang trên mình nhiều cải tiến đáng giá giúp Galaxy Z Fold 
								trở thành dòng điện thoại gập đã tốt nay càng tốt hơn.', 12,2, 'Android 12', N'Snapdragon', '4400','samsung-zfold4-cream-1.jpg',1,1 );
insert into ModPhones values(  'Samsung Galaxy Z Fold3', 7.6, N'Samsung Galaxy Z Fold3 5G, chiếc điện thoại được nâng cấp toàn diện về nhiều mặt, đặc biệt đây là điện thoại màn hình gập đầu tiên trên thế giới có camera ẩn (08/2021).
								Sản phẩm sẽ là một “cú hit” của Samsung góp phần mang đến những trải nghiệm mới cho người dùng.', 12,2, 'Android 11', N'Snapdragon', '4400','samsung-zfold3-black-1.jpg',1,1 );
insert into ModPhones values(  'Samsung Galaxy Z Flip5', 6.7, N'Samsung Galaxy Z Flip5 đã chính thức ra mắt vào ngày 26 tháng 7. Đây là một chiếc điện thoại thông minh có thiết kế độc đáo với màn hình gập, 
								được trang bị bộ vi xử lý cao cấp Snapdragon 8 Gen 2 for Galaxy, RAM 8 GB, bộ nhớ trong 256 GB, camera kép 12 MP và pin 3700 mAh.', 8,2, 'Android', N'Snapdragon', '3700','samsung-zflip5-purple-1.jpg',1,1 );
insert into ModPhones values(  'Samsung Galaxy Z Flip4', 6.7, N'Samsung Galaxy Z Flip4 128GB đã chính thức ra mắt thị trường công nghệ, đánh dấu sự trở lại của Samsung trên con đường định hướng người dùng về sự tiện lợi trên những chiếc điện thoại gập.
								Với độ bền được gia tăng cùng kiểu thiết kế đẹp mắt giúp Flip4 trở thành một trong những tâm điểm sáng giá cho nửa cuối năm 2022.', 8,2, 'Android', N'Snapdragon', '3700','samsung-zflip4-blue-1.jpg',1,1 );
insert into ModPhones values(  'Samsung Galaxy Z Flip3', 6.7, N'Trong sự kiện Galaxy Unpacked hồi 11/8, Samsung đã chính thức trình làng mẫu điện thoại màn hình gập thế hệ mới mang tên Samsung Galaxy Z Flip3 5G 128GB. Đây là một siêu phẩm với màn hình 
								gập dạng vỏ sò cùng nhiều điểm cải tiến và thông số ấn tượng, sản phẩm chắc chắn sẽ thu hút được rất nhiều sự quan tâm của người dùng, đặc biệt là phái nữ.', 8,2, 'Android', N'Snapdragon', '3300','samsung-zflip3-cream-1.jpg',1,1 );
insert into ModPhones values(  'Samsung Galaxy M34', 6.5, N'Samsung Galaxy M34 5G đã thu hút sự chú ý của cộng đồng người dùng smartphone không chỉ với mức giá hấp dẫn mà còn với bộ thông số kỹ thuật ấn tượng. Khả năng vượt trội của camera, 
								pin lớn cùng với thiết kế bắt mắt của chiếc điện thoại hứa hẹn mang đến những trải nghiệm sử dụng tốt nhất dành cho bạn.', 8,2, 'Android', N'Exynos', '6000','samsung-m34-black-1.jpg',1,1 );
insert into ModPhones values(  'Samsung Galaxy M54', 6.7, N'Tiếp nối thành công của Galaxy M53 5G, Samsung tiếp tục tung ra thị trường mẫu điện thoại Samsung Galaxy M54 5G. Lần ra mắt này Samsung đã nâng cấp về mặt hiệu năng,
								dung lượng pin đồng thời cải tiến về mặt thiết kế giúp đem đến sản phẩm tốt nhất cho bạn.', 8,2, 'Android', N'Exynos', '6000','samsung-m54-black-2.jpg',1,1 );
insert into ModPhones values(  'Samsung Galaxy A35', 6.6, N'Samsung Galaxy A35 5G là một trong những dòng điện thoại thông minh tầm trung đáng chú ý của Samsung. Máy sở hữu cho mình một hiệu suất mạnh mẽ, 
								màn hình sắc nét và viên pin lớn, chiếc điện thoại hứa hẹn mang đến trải nghiệm đa dạng và tuyệt vời cho người dùng.', 8,2, 'Android', N'Exynos', '5000','samsung-a35-blue-1.jpg',1,1 );
insert into ModPhones values(  'Samsung Galaxy A14', 6.6, N'Samsung Galaxy A14 5G có thể là chiếc smartphone đầu tiên của năm 2023 được nhà sản xuất đến từ Hàn Quốc phát hành chính thức ở Việt Nam. Máy nổi bật với lối thiết kế trẻ trung, 
								màn hình kích thước lớn và camera chính có độ phân giải lên tới 50 MP.', 8,2, 'Android', N'MediaTek', '5000','samsung-a14-red-1.jpg',1,1 );

-- MOD PHONE VIVO
insert into ModPhones values(  'Vivo X70', 6.56, N'Vivo X70 ra mắt với hàng loạt đổi mới không chỉ ở ngoại hình mà cả bên trong. Chiếc điện thoại có khả năng nhiếp ảnh chuyên nghiệp, hiệu năng vượt trội cùng với tốc độ kết nối mạng 5G hàng đầu, 
								chắc chắn sẽ đáp ứng nhu cầu giải trí hằng ngày của bạn.', 8,3, 'Android 11', N'MediaTek', '4400','vivo-x70pro-green-1.jpg',1,1 );
insert into ModPhones values(  'Vivo X70 Pro', 6.56, N'Vivo cho ra mắt Vivo X70 Pro, một sản phẩm cao cấp ấn tượng với kiểu dáng lẫn hiệu năng tuyệt vời. Đặc biệt, camera còn được nâng cấp hàng loạt các tính năng thông minh, cùng bạn sáng tạo nên
								những kiệt tác đầy nghệ thuật.', 12,3, 'Android 11', N'MediaTek', '4450','vivo-x70pro-black-1.jpg',1,1 );
insert into ModPhones values(  'Vivo X80', 6.78, N'Vivo X80 được xem là thiết bị hướng đến đối tượng người dùng chuyên nhiếp ảnh trên điện thoại, bằng việc hợp tác cùng nhà sản xuất ống kính nổi tiếng mang thương hiệu ZEISS. 
								Với những tính năng mới mẻ hay chế độ quay - chụp độc đáo, X80 hứa hẹn mang đến cho bạn những trải nghiệm đầy mới lạ và chất lượng.', 12,3, 'Android 12', N'MediaTek', '4500','vivo-x80-green-1.jpg',1,1 );
insert into ModPhones values(  'Vivo X80 Pro', 6.78, N'Mới đây Vivo đã trở lại đường đua cho các sản phẩm flagship khi tung ra phiên bản Vivo X80 Pro. Máy được trang bên trong một cấu hình mạnh mẽ hứa hẹn mang đến cho bạn những trải
								nghiệm chơi game đồ họa cao một cách mượt mà. Cùng với đó là sự hợp tác với nhà sản xuất ống kính ZEISS để mang lại nhiều tính năng mới mẻ.', 12,3, 'Android 12', N'Snapdragon', '4700','vivo-x80pro-black-1.jpg',1,1 );
insert into ModPhones values(  'Vivo X60', 6.56, N'Vivo X60 - mẫu smartphone mới nhất thuộc dòng X series cao cấp vừa được ra mắt. Mang thiết kế ấn tượng, hiệu năng mạnh mẽ và cụm camera ZEISS dẫn đầu công nghệ. 
								Thêm một siêu phẩm đến từ Vivo mà các tín đồ công nghệ không thể bỏ lỡ.', 8,3, 'Android 11', N'Exynos', '4300','vivo-x60-blue-1.jpg',1,1 );
insert into ModPhones values(  'Vivo V29e', 6.67, N'vivo V29e 5G là một phiên bản điện thoại di động đáng chú ý trong phân khúc tầm trung, đặc biệt với sự kết hợp tinh tế giữa thiết kế và hiệu suất. Điều làm nổi bật chiếc điện thoại này chính là camera chất lượng,
								thiết kế sang trọng và viên pin lớn kèm sạc nhanh. ', 12,3, 'Android 13', N'Snapdragon', '4800','vivo-v29e-blue-1.jpg',1,1 );
insert into ModPhones values(  'Vivo V29 ', 6.78, N'Nhằm cạnh tranh với nhiều hãng điện thoại khác trong phân khúc, vivo đã cho ra mắt sản phẩm mang tên vivo V29 5G, sản phẩm lần này đem đến nhiều cải tiến mới với thiết kế độc đáo, 
								hiệu năng mạnh mẽ với chip rồng cùng camera hỗ trợ chụp ảnh sắc nét.', 12,3, 'Android 13', N'Snapdragon', '4600','vivo-v29-purple-1.jpg',1,1 );
insert into ModPhones values(  'Vivo V25e ', 6.44, N'Cùng với vivo V25, nhà sản xuất Trung Quốc cũng đã tung ra thị trường mẫu điện thoại vivo V25E mới sở hữu thiết kế vô cùng hiện đại và độc đáo với mặt lưng kính có thể thay đổi màu sắc, 
								camera 64 MP hỗ trợ OIS và sạc nhanh 44 W, đáp ứng đầy đủ nhu cầu của người dùng.', 8,3, 'Android 12', N'MediaTek', '4500','vivo-v25e-black-1.jpg',1,1 );
insert into ModPhones values(  'Vivo V25 ', 6.44, N'2022 là một năm bùng nổ cho điện thoại V series khi nhiều sản phẩm được cho ra mắt với thông số và thiết kế rất ấn tượng, trong đó có Vivo V25 vừa được giới thiệu vào tháng 10/2022, 
								hứa hẹn sẽ gây sốt trên thị trường công nghệ trong giai đoạn cuối năm nay nhờ tạo hình đẹp cùng hiệu năng mạnh mẽ.', 8,3, 'Android 12', N'MediaTek', '4500','vivo-v25-yellow-1.jpg',1,1 );
insert into ModPhones values(  'Vivo V27e ', 6.62, N'vivo V27e một trong những chiếc điện thoại tầm trung nổi bật của vivo trong năm 2023. Với thiết kế độc đáo và khả năng chụp ảnh - quay phim ấn tượng, vì thế máy đã mang lại cho vivo nhiều niềm tự hào 
								khi ra mắt tại thị trường Việt Nam, hứa hẹn mang đến trải nghiệm tuyệt vời đến với người dùng.', 8,3, 'Android 13', N'MediaTek', '4600','vivo-v27e-purple-1.jpg',1,1 );
insert into ModPhones values(  'Vivo V27 ', 6.78, N'Với thiết kế sang trọng, camera đỉnh cao cùng hiệu năng mạnh mẽ, Vivo V27 5G chính thức là cái tên sở hữu đầy đủ các yếu tố trên vừa được nhà Vivo cho ra mắt vào khoảng đầu năm 2023,
								hứa hẹn sẽ đem đến khả năng chụp ảnh chuyên nghiệp và hiệu suất vượt trội.', 8,3, 'Android 13', N'MediaTek', '4600','vivo-v27-blue-1.jpg',1,1 );
insert into ModPhones values(  'Vivo Y100 ', 6.67, N'vivo Y100 mẫu điện thoại tầm trung với nhiều nâng cấp đáng giá, được vivo giới thiệu tại thị trường Việt Nam. Lần ra mắt này hãng đem đến một sản phẩm với thiết kế đẹp mắt, màn hình sắc nét và hiệu năng ổn định với nhiều tác vụ,
								hứa hẹn đem đến cho bạn trải nghiệm di động đỉnh cao.', 8,3, 'Android 14', N'Snapdragon', '5000','vivo-y100-green-1.jpg',1,1 );
insert into ModPhones values(  'Vivo Y03 ', 6.56, N'vivo Y03 64GB - phiên bản điện thoại vừa hấp dẫn lại vừa phù hợp với túi tiền, được vivo giới thiệu tại Việt Nam. Không chỉ toát lên nét mới mẻ và bắt mắt hơn các sản phẩm trước, chiếc smartphone này còn đi kèm với 
								những cải tiến đáng kể về cấu hình cũng như viên pin lớn 5000 mAh.', 4,3, 'Android', N'MediaTek', '5000','vivo-y03-green-1.jpg',1,1 );
insert into ModPhones values(  'Vivo Y36 ', 6.64, N'vivo Y36 128GB là một trong những sản phẩm điện thoại thông minh nổi bật và đáng chú ý của thương hiệu vivo. Với những tính năng và thông số kỹ thuật vượt trội, vivo Y36 hứa hẹn mang đến cho người dùng trải nghiệm di
								động đỉnh cao.', 8,3, 'Android 13', N'Snapdragon', '5000','vivo-y36-aqua-1.jpg',1,1 );
insert into ModPhones values(  'Vivo Y35 ', 6.58, N'vivo Y35 là một chiếc điện thoại tầm trung đáng chú ý được ra mắt vào tháng 10/2022, máy nổi bật nhờ sở hữu thiết kế đẹp, khả năng sạc nhanh cùng cấu hình ổn trong phân khúc, ngoài ra camera với độ phân giải lên
								đến 50 MP cũng là điểm cộng dành cho chiếc máy này.', 8,3, 'Android', N'Snapdragon', '5000','vivo-y35-yellow-1.jpg',1,1 );
insert into ModPhones values(  'Vivo T1 ', 6.44, N'Ngay từ khi công bố thông số kỹ thuật đầy đủ cùng mức giá bán, Vivo T1 5G bỗng dưng trở thành cái tên được cộng đồng game thủ nhắc đến rất nhiều nhờ có hiệu năng cực cao nhưng giá thành trang bị lại cực kỳ hợp lý. 
								Đi kèm với đó là nhiều công nghệ tối ưu game tân tiến giúp quá trình chơi game của bạn được diễn ra mượt mà.', 8,3, 'Android', N'Snapdragon', '4700','vivo-t1-green-1.jpg',1,1 );

-- MOD PHONE OPPO
insert into ModPhones values(  'OPPO Find N3', 7.82, N'OPPO chính thức giới thiệu sản phẩm OPPO Find N3 5G, một chiếc điện thoại thông minh với thiết kế gập ngang hoàn toàn hiện đại và đẳng cấp, nổi bật với camera và hiệu năng đứng đầu.
								Đây là một bước đột phá của OPPO trong việc kết hợp sự tiện ích và thẩm mỹ tối ưu, đem lại trải nghiệm độc đáo cho người dùng.', 16,4, 'Android 13', N'Snapdragon', '4805','oppo-n3-yellow-1.jpg',1,1 );
insert into ModPhones values(  'OPPO Find N3 Flip', 6.8, N'OPPO Find N3 Flip 5G Hồng được OPPO cho ra mắt chính thức tại thị trường Việt Nam vào tháng 10/2023. Sản phẩm được hãng đầu tư mạnh mẽ về camera với độ phân giải lên đến 50 MP, cấu hình sử dụng chip
								Dimensity 9200 5G và thiết kế được thay đổi với bản lề gập mở tốt hơn cùng màu hồng sang trọng và nữ tính.', 12,4, 'Android', N'MediaTek', '4300','oppo-n3flip-black-1.jpg',1,1 );
insert into ModPhones values(  'OPPO Find N2 Flip', 6.8, N'OPPO Find N2 Flip 5G - chiếc điện thoại gập đầu tiên của OPPO đã được giới thiệu chính thức tại Việt Nam vào tháng 03/2023. Sở hữu cấu hình mạnh mẽ cùng thiết kế siêu nhỏ gọn giúp tối ưu kích thước, 
								chiếc điện thoại sẽ cùng bạn nổi bật trong mọi không gian với vẻ ngoài đầy cá tính.', 8,4, 'Android', N'MediaTek', '4300','oppo-n2flip-purple-1.jpg',1,1 );
insert into ModPhones values(  'OPPO Find X5 Pro', 6.7, N'OPPO Find X5 Pro 5G có lẽ là cái tên sáng giá được xướng tên trong danh sách điện thoại có thiết kế ấn tượng trong năm 2022. Máy được hãng cho ra mắt với một diện mạo độc lạ chưa từng có, cùng với đó 
								là những nâng cấp về chất lượng ở camera nhờ sự hợp tác với nhà sản xuất máy ảnh Hasselblad. ', 12,4, 'Android', N'Snapdragon', '5000','oppo-findx5-white-1.jpg',1,1 );
insert into ModPhones values(  'OPPO Reno11 F', 6.7, N'OPPO Reno11 F 5G là một chiếc điện thoại tầm trung mới được OPPO ra mắt trong thời gian gần đây. Máy sở hữu nhiều ưu điểm nổi bật như thiết kế trẻ trung, màn hình đẹp, hiệu năng mạnh mẽ nhờ chip Dimensity 7050 5G,
								hứa hẹn mang đến trải nghiệm tốt khi sử dụng.', 8,4, 'Android 14', N'MediaTek', '5000','oppo-reno-11f-blue-1.jpg',1,1 );
insert into ModPhones values(  'OPPO Reno11 Pro', 6.7, N'OPPO Reno11 F 5G là một chiếc điện thoại tầm trung mới được OPPO ra mắt trong thời gian gần đây. Máy sở hữu nhiều ưu điểm nổi bật như thiết kế trẻ trung, màn hình đẹp, hiệu năng mạnh mẽ nhờ chip Dimensity 7050 5G,
								hứa hẹn mang đến trải nghiệm tốt khi sử dụng.', 12,4, 'Android 14', N'MediaTek', '4600','oppo-reno11p-white-1.jpg',1,1 );
insert into ModPhones values(  'OPPO Reno11', 6.7, N'OPPO Reno11 5G tiếp tục mang đến sự hấp dẫn cho người dùng, lấy cảm hứng từ những thành công trước đó. Điểm độc đáo của chiếc điện thoại nằm ở thiết kế thu hút, cấu hình mạnh mẽ và khả năng chụp ảnh ấn tượng. 
								Được tạo ra để đáp ứng một loạt các nhu cầu từ giải trí, nhiếp ảnh đến công việc đòi hỏi hiệu năng cao.', 8,4, 'Android 14', N'MediaTek', '5000','oppo-reno11-green-3.jpg',1,1 );
insert into ModPhones values(  'OPPO Reno10 Pro+', 6.74, N'OPPO Reno10 Pro+ 5G là một sản phẩm tiếp nối sự thành công của thế hệ trước đó, với thiết kế đẹp mắt, cấu hình mạnh mẽ và máy ảnh chất lượng cao. Máy đáp ứng được nhu cầu giải trí, chụp ảnh và làm việc của người dùng, 
								là lựa chọn hoàn hảo cho những ai đang tìm kiếm một chiếc điện thoại đa năng và hiện đại.', 12,4, 'Android 13', N'Snapdragon', '4700','oppo-remo10p+-gray-1.jpg',1,1 );
insert into ModPhones values(  'OPPO Reno10 Pro', 6.7, N'OPPO Reno10 Pro 5G là một trong những sản phẩm của OPPO được ra mắt trong 2023. Với thiết kế đẹp mắt, màn hình lớn và hiệu năng mạnh mẽ, Reno10 Pro chắc chắn sẽ là lựa chọn đáng cân nhắc dành cho
								những ai đang tìm kiếm chiếc máy tầm trung để phục vụ tốt mọi nhu cầu.', 12,4, 'Android', N'Snapdragon', '4600','oppo-remo10p-gray-1.jpg',1,1 );
insert into ModPhones values(  'OPPO Reno10', 6.7, N'Là một trong những chiếc smartphone mới nhất của OPPO trên thị trường hiện nay, OPPO Reno10 5G mang trên mình bộ áo đẹp mắt, hiệu năng ổn định đi cùng với đó là khả năng nhiếp ảnh vượt trội, 
								đáp ứng mượt mà hầu hết các nhu cầu của người dùng.', 8,4, 'Android 13', N'MediaTek', '5000','oppo-reno10-blue-1.jpg',1,1 );
insert into ModPhones values(  'OPPO A79', 6.72, N'OPPO trình làng mẫu điện thoại tầm trung với tên gọi là OPPO A79 5G. Được thiết kế với mặt lưng họa tiết độc đáo không chỉ mang đến vẻ hiện đại mà còn tôn lên sự sang trọng. Điều đặc sắc của sản phẩm là khả năng chụp ảnh và hiệu suất, 
								đưa tên tuổi của OPPO lên vị thế mới trong làng điện thoại.', 8,4, 'Android 13', N'MediaTek', '5000','oppo-a79-purple-1.jpg',1,1 );
insert into ModPhones values(  'OPPO A98', 6.72, N'Những mẫu điện thoại OPPO cho ra mắt thời gian gần đây (2023) có vẻ ngoài đẹp mắt phù hợp với thị hiếu người tiêu dùng hiện nay. Trong đó OPPO A98 5G mẫu điện thoại mới của điện thoại OPPO A, với lối thiết kế hiện đại, màn hình hiển thị chi
								tiết thông tin cũng như một hiệu năng ổn định.', 8,4, 'Android', N'Snapdragon', '5000','oppo-a98-black-1.jpg',1,1 );
insert into ModPhones values(  'OPPO A78 ', 6.43, N'OPPO A78 một sản phẩm được nhà OPPO cho ra mắt với thiết kế trẻ trung, thiết bị này được đánh giá có hiệu năng ổn định, màn hình sắc nét và viên pin có dung lượng lớn,
								phù hợp cho người dùng sử dụng lâu dài.', 8,4, 'Android 13', N'Snapdragon', '5000','oppo-a78-black-1.jpg',1,1 );

-- MOD PHONE XIAOMI
insert into ModPhones values(  'Xiaomi 14 Ultra', 6.73, N'Xiaomi Redmi Note 11 Pro 4G mang trong mình khá nhiều những nâng cấp cực kì sáng giá. Là chiếc điện thoại có màn hình lớn, tần số quét 120 Hz,
								hiệu năng ổn định cùng một viên pin siêu trâu.', 6,5, 'Android 11', N'Snapdragon', '4500','xiaomi-14-ultra-gray-3.jpg',1,1 );
insert into ModPhones values(  'Xiaomi 14', 6.36, N'Xiaomi 14 được ra mắt với tâm hướng mang đến những trải nghiệm mới mẻ và chất lượng. Như một lá cờ đầu trong ngành công nghệ, điện thoại không chỉ có thiết kế đẹp mà còn ấn tượng về màn hình,
								cấu hình mạnh mẽ, máy ảnh chất lượng và pin có thời gian sử dụng lâu dài.', 12,5, 'Android 14', N'Snapdragon', '4610','xiaomi-14-white-1.jpg',1,1 );
insert into ModPhones values(  'Xiaomi 13T Pro ', 6.67, N'Xiaomi 13T Pro 5G là mẫu máy thuộc phân khúc tầm trung đáng chú ý tại thị trường Việt Nam. Điện thoại ấn tượng nhờ được trang bị chip Dimensity 9200+,
								camera 50 MP có kèm sự hợp tác với Leica cùng kiểu thiết kế tinh tế đầy sang trọng.', 12,5, 'Android 13', N'MediaTek', '5000','xiaomi-13tpro-black-1.jpg',1,1 );
insert into ModPhones values(  'Xiaomi Redmi Note 13 Pro+', 6.67, N'Xiaomi tiếp tục cho ra mắt một chiếc điện thoại tầm trung mới mang tên gọi Xiaomi Redmi Note 13 Pro+ 5G. Sản phẩm được chăm chút với thiết kế trang nhã và độc đáo, 
								không chỉ mang lại vẻ đẹp hiện đại mà còn nâng cao đẳng cấp sang trọng. Điểm đặc biệt nổi bật của sản phẩm là khả năng hiển thị và hiệu suất mạnh mẽ, tạo ra trải nghiệm sử dụng tối ưu.', 8,5, 'Android', N'MediaTek', '5000','xiaomi-13tpro+-white-1.jpg',1,1 );
insert into ModPhones values(  'Xiaomi Redmi Note 13 Pro', 6.67, N'Xiaomi Redmi Note 13 Pro 5G khi ra mắt đã tạo được ấn tượng đối với người dùng nhờ được trang bị chip Snapdragon 7s Gen 2, camera 200 MP và sạc nhanh 67 W.
								Đây được xem là những thông số nổi trội trong phân khúc, hứa hẹn mang đến những trải nghiệm tốt vượt ngoài mong đợi.', 8,5, 'Android 13', N'Snapdragon', '5100','xiaomi-13pro-green-1.jpg',1,1 );
insert into ModPhones values(  'Xiaomi 12T Pro', 6.67, N'Cuối cùng Xiaomi 12T Pro 5G cũng đã chính thức lộ diện trên thị trường sau hàng loạt thông tin rò rỉ về thông số, đúng như dự đoán thì độ phân giải trên camera của phiên bản này được nhà sản xuất nâng cấp lên đến 200 MP, 
								giúp máy trở thành thiết bị có khả năng ghi hình sắc nét thuộc top đầu giới smartphone, đi kèm với đó là màn hình chất lượng cùng bộ vi xử lý mạnh mẽ xứng tầm flagship.', 12,5, 'Android 12', N'Snapdragon', '5000','xiaomi-12tpro-black-1.jpg',1,1 );
insert into ModPhones values(  'Xiaomi 12T', 6.67, N'Xiaomi 12T series đã ra mắt trong sự kiện của Xiaomi vào ngày 4/10, trong đó có Xiaomi 12T 5G 128GB - máy sở hữu nhiều công nghệ hàng đầu trong giới smartphone tiêu biểu như: Chipset mạnh mẽ đến từ MediaTek, 
								camera 108 MP sắc nét cùng khả năng sạc 120 W siêu nhanh.', 8,5, 'Android 12', N'MediaTek', '5000','xiaomi-12t-blue-1.jpg',1,1 );
insert into ModPhones values(  ' Xiaomi Redmi A2', 6.52, N'Xiaomi Redmi A2 chiếc điện thoại giá rẻ trên thị trường nhưng không vì thế mà nó kém cạnh về hiệu năng và tính năng. Với chip Helio G36, màn hình 6.52 inch, pin 5000 mAh. 
								Máy sẽ là một sự lựa chọn tuyệt vời cho những người muốn có một chiếc smartphone đơn giản nhưng hiệu quả.', 2,5, 'Android 13', N'MediaTek', '5000','xiaomi-redmia2-green-1.jpg',1,1 );
insert into ModPhones values(  ' Xiaomi Redmi A2+', 6.52, N'Xiaomi Redmi A2+ chiếc điện thoại được nhà Xiaomi tung ra thị trường Việt Nam trong thời gian 05/2023. Máy mang trong mình hiệu năng ổn định với các tác vụ đơn giản, 
								viên pin lớn cùng hệ thống camera mang đến khả năng chụp ổn định.', 3,5, 'Android 13', N'MediaTek', '5000','xiaomi-redmia2+-blue-1.jpg',1,1 );
insert into ModPhones values(  ' Xiaomi Redmi Note 11', 6.43, N'Redmi Note 11 (6GB/128GB) vừa được Xiaomi cho ra mắt, được xem là chiếc smartphone có giá tầm trung ấn tượng, với 1 cấu hình mạnh, cụm camera xịn sò, pin khỏe,
								sạc nhanh mà giá lại rất phải chăng.', 6,5, 'Android 11', N'Snapdragon', '5000','xiaomi-note11-purple-1.jpg',1,1 );
insert into ModPhones values(  'Xiaomi Redmi Note 11 Pro', 6.67, N'Xiaomi Redmi Note 11 Pro 4G mang trong mình khá nhiều những nâng cấp cực kì sáng giá. Là chiếc điện thoại có màn hình lớn, tần số quét 120 Hz,
								hiệu năng ổn định cùng một viên pin siêu trâu.', 8,5, 'Android 11', N'MediaTek', '5000','xiaomi-note11pro-gray-1.jpg',1,1 );
insert into ModPhones values(  'Xiaomi Redmi Note 11 Pro+', 6.67, N'Xiaomi Redmi Note 11 Pro 4G mang trong mình khá nhiều những nâng cấp cực kì sáng giá. Là chiếc điện thoại có màn hình lớn, tần số quét 120 Hz,
								hiệu năng ổn định cùng một viên pin siêu trâu.', 6,5, 'Android 11', N'Snapdragon', '4500','xiaomi-note11pro+-green-1.jpg',1,1 );

-- MOD PHONE HAUWEI
insert into ModPhones values(  'HUAWEI Mate 30 Pro', 6.53, N'Những năm gần đây thì Huawei luôn mang tới cho người dùng sự bất ngờ với những trang bị đột phá lần đầu tiên xuất hiện trên chiếc smartphone của mình và
								mới đây chiếc Huawei Mate 30 Pro đã chính thức ra mắt và nó vẫn mang trong mình rất nhiều công nghệ mang tính đột phá của Huawei.', 8,6, 'EMUI 10', N'Kirin', '4500','huawai-mate30pro-1.jpg',1,1 );
insert into ModPhones values(  'HUAWEI Mate 20 Pro', 6.39, N'Thế hệ siêu phẩm mới của Huawei chính thức lộ diện với cái tên Huawei Mate 20 Pro, chiếc điện thoại thu hút trong thiết kế, mạnh mẽ trong hiệu năng cùng một hệ thống 
								camera ấn tượng.', 6,6, 'Android 9', N'Kirin', '4200','huawei-mate20pro-purple-1.jpg',1,1 );
insert into ModPhones values(  'HUAWEI Mate 20X', 7.2, N'Huawei Mate 20 X là mẫu smartphone với cấu hình cực khủng và hướng trực tiếp vào
								đối tượng khách hàng game thủ.', 6,6, 'Android 9', N'Kirin', '5000','huawei-20x-1.jpg',1,1 );
insert into ModPhones values(  'HUAWEI Mate 20', 6.5, N'Huawei Mate 20 là chiếc flagship mới được Huawei ra mắt với điểm nhấn tới từ 3 camera ở mặt lưng và chất lượng chụp ảnh 
								thuộc hàng tốt nhất thế giới hiện nay.', 6,6, 'Android 9', N'Kirin', '4000','huawei-mate20-blue-1.jpg',1,1 );
insert into ModPhones values(  'Huawei P40 Pro+', 6.58, N'Huawei P40 Pro Plus là siêu phẩm cao cấp nhất trong bộ ba flagship vừa được Huawei ra mắt vào cuối tháng 3/2020. Máy có một màn hình tràn cạnh ấn tượng, 
								cấu hình khủng, đặc biệt cụm camera zoom xa 100x vượt ngoài mọi mong đợi.', 8,6, 'EMUI 10', N'Kirin', '4200','huawei-p40pro+-1.jpg',1,1 );
insert into ModPhones values(  'Huawei P40 Pro', 6.58, N'Huawei P40 Pro là siêu phẩm cao cấp nhất trong bộ ba flagship vừa được Huawei ra mắt vào cuối tháng 3/2020. Máy có một màn hình tràn cạnh ấn tượng, 
								cấu hình khủng, đặc biệt cụm camera zoom xa 100x vượt ngoài mọi mong đợi.', 8,6, 'EMUI 10', N'Kirin', '4200','huawei-p40pro-blue-1.jpg',1,1 );
insert into ModPhones values(  'Huawei P30 Pro', 6.47, N'Huawei P30 Pro là một bước đột phá của Huawei cũng như camera trên smartphone
								khi đem lại khả năng zoom như một "kính viễn vọng".', 8,6, 'Android 9 (Pie)', N'Kirin', '4200','huawei-p30pro-purple-1.jpg',1,1 );
insert into ModPhones values(  'Huawei P30', 6.1, N'Huawei P30 là chiếc smartphone cao cấp vừa được Huawei giới thiệu với thiết kế tuyệt đẹp,
								hiệu năng mạnh mẽ và thiết lập camera ấn tượng.', 8,6, 'Android 9 (Pie)', N'Kirin', '3650','huawei-p30-blue-1.jpg',1,1 );
insert into ModPhones values(  'Huawei Nova 7i', 6.4, N'Sau thành công dòng sản phẩm Nova 3i, Nova 5i, Huawei tiếp tục cho ra mắt người kế nhiệm mang tên Huawei Nova 7i với nhiều đột phá về cấu hình, thiết kế và camera. 
								Đi kèm với giá thành phải chăng, thiết bị hứa hẹn tạo nên cơn sốt điện thoại cho năm 2020.', 8,6, 'EMUI 10', N'Kirin', '4200','huawei-nova7i-green-1.jpg',1,1 );
insert into ModPhones values(  'Huawei Nova 5T', 6.25, N'Huawei Nova 5T là mẫu smartphone có cấu hình mạnh mẽ, thiết kế thời trang, đánh mạnh vào khâu chụp ảnh selfie với camera 32 MP,
								nhưng lại có giá bán rất cạnh tranh.', 8,6, 'Android 9 (Pie)', N'Kirin', '3750','huawei-nova5t-green-1.jpg',1,1 );
insert into ModPhones values(  'Huawei Nova 3i', 6.3, N'Với những smartphone như Nova 2i hay Nova 3e thì Huawei đã và đang tạo nên những cơn sốt rất lớn trong phân khúc tầm trung và cái tên mới
								Huawei Nova 3i được cải tiến và nâng cấp nhiều điểm mới, hứa hẹn sẽ mang lại làn gió mới cho thị trường.', 4,6, 'EMUI 9', N'Kirin', '3340','huawei-nova3i-white-1.jpg',1,1 );
													
-- IPHONE 15 ID: 1 -> 15
insert into Phones values('iPhone 15 128GB','1512804000001',4,21299000,10,'black',128,1)
insert into Phones values('iPhone 15 128GB','1512804000002',4,21299000,10,'green',128, 1)
insert into Phones values('iPhone 15 128GB','1512804000003',4,21299000,10,'pink',128, 1)
insert into Phones values('iPhone 15 128GB','1512804000004',4,21299000,10,'blue',128, 1)
insert into Phones values('iPhone 15 128GB','1512804000005',4,21299000,10,'yellow',128, 1)

insert into Phones values('iPhone 15 256GB','1525604000001',4,24299000,10,'black',256, 1)
insert into Phones values('iPhone 15 256GB','1525604000002',4,24299000,10,'green',256, 1)
insert into Phones values('iPhone 15 256GB','1525604000003',4,24299000,10,'pink',256, 1)
insert into Phones values('iPhone 15 256GB','1525604000004',4,24299000,10,'blue',256, 1)
insert into Phones values('iPhone 15 256GB','1525604000005',4,24299000,10,'yellow',256, 1)

insert into Phones values('iPhone 15 512GB','1551204000001',4,29399000,10,'black',512, 1)
insert into Phones values('iPhone 15 512GB','1551204000002',4,29399000,10,'green',512, 1)
insert into Phones values('iPhone 15 512GB','1551204000003',4,29399000,10,'pink',512, 1)
insert into Phones values('iPhone 15 512GB','1551204000004',4,29399000,10,'blue',512, 1)
insert into Phones values('iPhone 15 512GB','1551204000005',4,29399000,10,'yellow',512, 1)

-- IPHONE 15 PLUS: 16 -> 30
insert into Phones values('iPhone 15 Plus 128GB','1512803000001',3,24299000,10,'pink',128, 1)
insert into Phones values('iPhone 15 Plus 128GB','1512803000002',3,24299000,10,'green',128, 1)
insert into Phones values('iPhone 15 Plus 128GB','1512803000003',3,24299000,10,'blue',128, 1)
insert into Phones values('iPhone 15 Plus 128GB','1512803000004',3,24299000,10,'black',128, 1)
insert into Phones values('iPhone 15 Plus 128GB','1512803000005',3,24299000,10,'yellow',128, 1)

insert into Phones values('iPhone 15 Plus 256GB','1525603000001',3,25899000,10,'pink',256, 1)
insert into Phones values('iPhone 15 Plus 256GB','1525603000002',3,25899000,10,'green',256, 1)
insert into Phones values('iPhone 15 Plus 256GB','1525603000003',3,25899000,10,'blue',256, 1)
insert into Phones values('iPhone 15 Plus 256GB','1525603000004',3,25899000,10,'black',256, 1)
insert into Phones values('iPhone 15 Plus 256GB','1525603000005',3,24299000,10,'yellow',256, 1)

insert into Phones values('iPhone 15 Plus 512GB','1551203000001',3,27899000,10,'pink',512, 1)
insert into Phones values('iPhone 15 Plus 512GB','1551203000002',3,27899000,10,'green',512, 1)
insert into Phones values('iPhone 15 Plus 512GB','1551203000003',3,27899000,10,'blue',512, 1)
insert into Phones values('iPhone 15 Plus 512GB','1551203000004',3,27899000,10,'black',512, 1)
insert into Phones values('iPhone 15 Plus 512GB','1551203000005',3,27899000,10,'yellow',512, 1)
--IPHONE 15 PRO: 31 -> 46
insert into Phones values('iPhone 15 Pro 128GB','1512802000001',2,26799000,10,'black',128, 1)
insert into Phones values('iPhone 15 Pro 128GB','1512802000002',2,26799000,10,'white',128, 1)
insert into Phones values('iPhone 15 Pro 128GB','1512802000003',2,26799000,10,'blue',128, 1)
insert into Phones values('iPhone 15 Pro 128GB','1512802000004',2,26799000,10,'natural',128, 1)

insert into Phones values('iPhone 15 Pro 256GB','1525602000001',2,29499000,10,'black',256, 1)
insert into Phones values('iPhone 15 Pro 256GB','1525602000002',2,29499000,10,'white',256, 1)
insert into Phones values('iPhone 15 Pro 256GB','1525602000003',2,29499000,10,'blue',256, 1)
insert into Phones values('iPhone 15 Pro 256GB','1525602000004',2,29499000,10,'natural',256, 1)

insert into Phones values('iPhone 15 Pro 512B','1551202000001',2,35899000,10,'black',512, 1)
insert into Phones values('iPhone 15 Pro 512B','1551202000002',2,35899000,10,'white',512, 1)
insert into Phones values('iPhone 15 Pro 512B','1551202000003',2,35899000,10,'blue',512, 1)
insert into Phones values('iPhone 15 Pro 512B','1551202000004',2,35899000,10,'natural',512, 1)

insert into Phones values('iPhone 15 Pro 1TB','1500102000001',2,39499000,10,'black',1024, 1)
insert into Phones values('iPhone 15 Pro 1TB','1500102000002',2,39499000,10,'white',1024, 1)
insert into Phones values('iPhone 15 Pro 1TB','1500102000003',2,39499000,10,'blue',1024, 1)
insert into Phones values('iPhone 15 Pro 1TB','1500102000004',2,39499000,10,'natural',1024, 1)
--IPHONE 15 PRO MAX: 47 ->  58
insert into Phones values('iPhone 15 Pro Max 256GB','1525601000001',1,31999000,0,'black',256, 1)
insert into Phones values('iPhone 15 Pro Max 256GB','1525601000002',1,31999000,10,'white',256, 1)
insert into Phones values('iPhone 15 Pro Max 256GB','1525601000003',1,31999000,0,'blue',256, 1)
insert into Phones values('iPhone 15 Pro Max 256GB','1525601000004',1,31999000,10,'natural',256, 1)

insert into Phones values('iPhone 15 Pro Max 512B','1551201000001',1,37699000,10,'black',512, 1)
insert into Phones values('iPhone 15 Pro Max 512B','1551201000002',1,37699000,10,'white',512, 1)
insert into Phones values('iPhone 15 Pro Max 512B','1551201000003',1,37699000,10,'blue',512, 1)
insert into Phones values('iPhone 15 Pro Max 512B','1551201000004',1,37699000,10,'natural',512, 1)

insert into Phones values('iPhone 15 Pro Max 1TB','1500101000001',1,43499000,0,'black',1024, 1)
insert into Phones values('iPhone 15 Pro Max 1TB','1500101000002',1,43499000,0,'white',1024, 1)
insert into Phones values('iPhone 15 Pro Max 1TB','1500101000003',1,43499000,0,'blue',1024, 1)
insert into Phones values('iPhone 15 Pro Max 1TB','1500101000004',1,43499000,10,'natural',1024, 1)
--IPHONE 14: 59 -> 73
insert into Phones values('iPhone 14 128GB','1412808000001',8,17999000,10,'black',128, 1)
insert into Phones values('iPhone 14 128GB','1412808000002',8,17999000,10,'purple',128, 1)
insert into Phones values('iPhone 14 128GB','1412808000003',8,17999000,10,'yellow',128, 1)
insert into Phones values('iPhone 14 128GB','1412808000004',8,17999000,10,'blue',128, 1)
insert into Phones values('iPhone 14 128GB','1412808000005',8,17999000,10,'white',128, 1)

insert into Phones values('iPhone 14 256GB','1425608000001',8,21799000,10,'black',256, 1)
insert into Phones values('iPhone 14 256GB','1425608000002',8,21799000,10,'purple',256, 1)
insert into Phones values('iPhone 14 256GB','1425608000003',8,21799000,10,'yellow',256, 1)
insert into Phones values('iPhone 14 256GB','1425608000004',8,21799000,10,'blue',256, 1)
insert into Phones values('iPhone 14 256GB','1425608000005',8,21799000,10,'white',256, 1)

insert into Phones values('iPhone 14 512GB','1451208000001',8,21999000,10,'black',512, 1)
insert into Phones values('iPhone 14 512GB','1451208000002',8,21999000,10,'purple',512, 1)
insert into Phones values('iPhone 14 512GB','1451208000003',8,21999000,10,'yellow',512, 1)
insert into Phones values('iPhone 14 512GB','1451208000004',8,21999000,10,'blue',512, 1)
insert into Phones values('iPhone 14 512GB','1451208000005',8,21999000,10,'white',512, 1)

--IPHONE 14 Plus: 74 -> 88
insert into Phones values('iPhone 14 Plus 128GB','1412807000001',7,19399000,10,'black',128, 1)
insert into Phones values('iPhone 14 Plus 128GB','1412807000002',7,19399000,10,'purple',128, 1)
insert into Phones values('iPhone 14 Plus 128GB','1412807000003',7,19399000,10,'blue',128, 1)
insert into Phones values('iPhone 14 Plus 128GB','1412807000004',7,19399000,10,'white',128, 1)
insert into Phones values('iPhone 14 Plus 128GB','1412811000005',7,19399000,10,'yellow',128, 1)

insert into Phones values('iPhone 14 Plus 256GB','1425607000001',7,23399000,10,'black',256, 1)
insert into Phones values('iPhone 14 Plus 256GB','1425607000002',7,23399000,10,'purple',256, 1)
insert into Phones values('iPhone 14 Plus 256GB','1425607000003',7,23399000,10,'blue',256, 1)
insert into Phones values('iPhone 14 Plus 256GB','1425607000004',7,23399000,10,'white',256, 1)
insert into Phones values('iPhone 14 Plus 256GB','1425607000005',7,23399000,10,'yellow',256, 1)

insert into Phones values('iPhone 14 Plus 512GB','1451207000001',7,25399000,10,'black',512, 1)
insert into Phones values('iPhone 14 Plus 512GB','1451207000002',7,25399000,10,'purple',512, 1)
insert into Phones values('iPhone 14 Plus 512GB','1451207000003',7,25399000,10,'blue',512, 1)
insert into Phones values('iPhone 14 Plus 512GB','1451207000004',7,25399000,10,'white',512, 1)
insert into Phones values('iPhone 14 Plus 512GB','1451207000005',7,25399000,10,'yellow',512, 1)
-- IPHONE 14 PRO: 89 -> 104
insert into Phones values('iPhone 14 Pro 128GB','1412806000001',6,23199000,10,'black',128, 1)
insert into Phones values('iPhone 14 Pro 128GB','1412806000002',6,23199000,10,'purple',128, 1)
insert into Phones values('iPhone 14 Pro 128GB','1412806000003',6,23199000,10,'sliver',128, 1)
insert into Phones values('iPhone 14 Pro 128GB','1412806000004',6,23199000,10,'gold',128, 1)

insert into Phones values('iPhone 14 Pro 256GB','1425606000001',6,26399000,10,'black',256, 1)
insert into Phones values('iPhone 14 Pro 256GB','1425606000002',6,26399000,10,'purple',256, 1)
insert into Phones values('iPhone 14 Pro 256GB','1425606000003',6,26399000,10,'sliver',256, 1)
insert into Phones values('iPhone 14 Pro 256GB','1425606000004',6,26399000,10,'gold',256, 1)

insert into Phones values('iPhone 14 Pro 512GB','1451206000001',6,27799000,10,'black',512, 1)
insert into Phones values('iPhone 14 Pro 512GB','1451206000002',6,27799000,10,'purple',512, 1)
insert into Phones values('iPhone 14 Pro 512GB','1451206000003',6,27799000,10,'sliver',512, 1)
insert into Phones values('iPhone 14 Pro 512GB','1451206000004',6,27799000,10,'gold',512, 1)

insert into Phones values('iPhone 14 Pro 1TB','1400106000001',6,28299000,10,'black',1024, 1)
insert into Phones values('iPhone 14 Pro 1TB','1400106000002',6,28299000,10,'purple',1024, 1)
insert into Phones values('iPhone 14 Pro 1TB','1400106000003',6,28299000,10,'sliver',1024, 1)
insert into Phones values('iPhone 14 Pro 1TB','1400106000004',6,28299000,10,'gold',1024, 1)

-- IPHONE 14 PRO MAX: 105 -> 116
insert into Phones values('iPhone 14 Pro Max 128GB','1412805000001',5,26199000,10,'black',128, 1)
insert into Phones values('iPhone 14 Pro Max 128GB','1412805000002',5,26199000,10,'purple',128, 1)
insert into Phones values('iPhone 14 Pro Max 128GB','1412805000003',5,26199000,10,'sliver',128, 1)
insert into Phones values('iPhone 14 Pro Max 128GB','1412805000004',5,26199000,10,'gold',128, 1)

insert into Phones values('iPhone 14 Pro Max 256GB','1425605000001',5,26699000,10,'black',256, 1)
insert into Phones values('iPhone 14 Pro Max 256GB','1425605000002',5,26699000,10,'purple',256, 1)
insert into Phones values('iPhone 14 Pro Max 256GB','1425605000003',5,26699000,10,'sliver',256, 1)
insert into Phones values('iPhone 14 Pro Max 256GB','1425605000004',5,26699000,10,'gold',256, 1)

insert into Phones values('iPhone 14 Pro Max 512GB','1451205000001',5,31899000,10,'black',512, 1)
insert into Phones values('iPhone 14 Pro Max 512GB','1451205000002',5,31899000,10,'purple',512, 1)
insert into Phones values('iPhone 14 Pro Max 512GB','1451205000003',5,31899000,10,'sliver',512, 1)
insert into Phones values('iPhone 14 Pro Max 512GB','1451205000004',5,31899000,10,'gold',512, 1)

insert into Phones values('iPhone 14 Pro Max 1TB','1400105000001',5,35999000,10,'black',1024, 1)
insert into Phones values('iPhone 14 Pro Max 1TB','1400105000002',5,35999000,10,'purple',1024, 1)
insert into Phones values('iPhone 14 Pro Max 1TB','1400105000003',5,35999000,10,'sliver',1024, 1)
insert into Phones values('iPhone 14 Pro Max 1TB','1400105000004',5,35999000,10,'gold',1024, 1)
-- IPHONE 13: 
insert into Phones values('iPhone 13 128GB','1312811000001',11,11999000,10,'pink',128, 1)
insert into Phones values('iPhone 13 128GB','1312811000002',11,11999000,10,'white',128, 1)
insert into Phones values('iPhone 13 128GB','1312811000003',11,11999000,10,'green',128, 1)
insert into Phones values('iPhone 13 128GB','1312811000004',11,11999000,10,'blue',128, 1)
insert into Phones values('iPhone 13 128GB','1312811000005',11,11999000,10,'back',128, 1)

insert into Phones values('iPhone 13 256GB','1325611000001',11,12999000,10,'pink',256, 1)
insert into Phones values('iPhone 13 256GB','1325611000002',11,12999000,10,'white',256, 1)
insert into Phones values('iPhone 13 256GB','1325611000003',11,12999000,10,'green',256, 1)
insert into Phones values('iPhone 13 256GB','1325611000004',11,12999000,10,'blue',256, 1)
insert into Phones values('iPhone 13 256GB','1325611000005',11,12999000,10,'back',256, 1)

insert into Phones values('iPhone 13 512GB','1306411000001',11,13999000,10,'pink',512, 1)
insert into Phones values('iPhone 13 512GB','1306411000002',11,13999000,10,'white',512, 1)
insert into Phones values('iPhone 13 512GB','1306411000003',11,13999000,10,'green',512, 1)
insert into Phones values('iPhone 13 512GB','1306411000004',11,13999000,10,'blue',512, 1)
insert into Phones values('iPhone 13 512GB','1306411000005',11,13999000,10,'back',512, 1)

-- IPHONE 13 PRO
insert into Phones values('iPhone 13 Pro 128GB','1312810000001',10,14999000,10,'sliver',128, 1)
insert into Phones values('iPhone 13 Pro 128GB','1312810000002',10,14999000,10,'green',128, 1)
insert into Phones values('iPhone 13 Pro 128GB','1312810000003',10,14999000,10,'gray',128, 1)
insert into Phones values('iPhone 13 Pro 128GB','1312810000004',10,14999000,10,'gold',128, 1)
insert into Phones values('iPhone 13 Pro 128GB','1312810000005',10,14999000,10,'blue',128, 1)

insert into Phones values('iPhone 13 Pro 256GB','1325610000001',10,15999000,10,'sliver',256, 1)
insert into Phones values('iPhone 13 Pro 256GB','1325610000002',10,15999000,10,'green',256, 1)
insert into Phones values('iPhone 13 Pro 256GB','1325610000003',10,15999000,10,'gray',256, 1)
insert into Phones values('iPhone 13 Pro 256GB','1325610000004',10,15999000,10,'gold',256, 1)
insert into Phones values('iPhone 13 Pro 256GB','1325610000005',10,15999000,10,'blue',256, 1)

insert into Phones values('iPhone 13 Pro 512GB','1351210000001',10,16999000,10,'sliver',512, 1)
insert into Phones values('iPhone 13 Pro 512GB','1351210000002',10,16999000,10,'green',512, 1)
insert into Phones values('iPhone 13 Pro 512GB','1351210000003',10,16999000,10,'gray',512, 1)
insert into Phones values('iPhone 13 Pro 512GB','1351210000004',10,16999000,10,'gold',512, 1)
insert into Phones values('iPhone 13 Pro 512GB','1351210000005',10,16999000,10,'blue',512, 1)

insert into Phones values('iPhone 13 Pro 1TB','1300110000001',10,17999000,10,'sliver',1024, 1)
insert into Phones values('iPhone 13 Pro 1TB','1300110000002',10,17999000,10,'green',1024, 1)
insert into Phones values('iPhone 13 Pro 1TB','1300110000003',10,17999000,10,'gray',1024, 1)
insert into Phones values('iPhone 13 Pro 1TB','1300110000004',10,17999000,10,'gold',1024, 1)
insert into Phones values('iPhone 13 Pro 1TB','1300110000005',10,17999000,10,'blue',1024, 1)

-- IPHONE 13 PRO MAX
insert into Phones values('iPhone 13 Pro Max 128GB','1312809000001',9,16499000,10,'sliver',128, 1)
insert into Phones values('iPhone 13 Pro Max 128GB','1312809000002',9,16499000,10,'green',128, 1)
insert into Phones values('iPhone 13 Pro Max 128GB','1312809000003',9,16499000,10,'gray',128, 1)
insert into Phones values('iPhone 13 Pro Max 128GB','1312809000004',9,16499000,10,'gold',128, 1)
insert into Phones values('iPhone 13 Pro Max 128GB','1312809000005',9,16499000,10,'blue',128, 1)

insert into Phones values('iPhone 13 Pro Max 256GB','1325609000001',9,17499000,10,'sliver',256, 1)
insert into Phones values('iPhone 13 Pro Max 256GB','1325609000002',9,17499000,10,'green',256, 1)
insert into Phones values('iPhone 13 Pro Max 256GB','1325609000003',9,17499000,10,'gray',256, 1)
insert into Phones values('iPhone 13 Pro Max 256GB','1325609000004',9,17499000,10,'gold',256, 1)
insert into Phones values('iPhone 13 Pro Max 256GB','1325609000005',9,17499000,10,'blue',256, 1)

insert into Phones values('iPhone 13 Pro Max 512GB','1351209000001',9,18499000,10,'sliver',512, 1)
insert into Phones values('iPhone 13 Pro Max 512GB','1351209000002',9,18499000,10,'green',512, 1)
insert into Phones values('iPhone 13 Pro Max 512GB','1351209000003',9,18499000,10,'gray',512, 1)
insert into Phones values('iPhone 13 Pro Max 512GB','1351209000004',9,18499000,10,'gold',512, 1)
insert into Phones values('iPhone 13 Pro Max 512GB','1351209000005',9,18499000,10,'blue',512, 1)

insert into Phones values('iPhone 13 Pro Max 1TB','1300109000001',9,19499000,10,'sliver',1024, 1)
insert into Phones values('iPhone 13 Pro Max 1TB','1300109000002',9,19499000,10,'green',1024, 1)
insert into Phones values('iPhone 13 Pro Max 1TB','1300109000003',9,19499000,10,'gray',1024, 1)
insert into Phones values('iPhone 13 Pro Max 1TB','1300109000004',9,19499000,10,'gold',1024, 1)
insert into Phones values('iPhone 13 Pro Max 1TB','1300109000005',9,19499000,10,'blue',1024, 1)
-- IPHONE 12
insert into Phones values('iPhone 12 64GB','1206414000001',14,7999000,10,'black',64, 1)
insert into Phones values('iPhone 12 64GB','1206414000002',14,7999000,10,'white',64, 1)
insert into Phones values('iPhone 12 64GB','1206414000003',14,7999000,10,'green',64, 1)
insert into Phones values('iPhone 12 64GB','1206414000004',14,7999000,10,'purple',64, 1)
insert into Phones values('iPhone 12 64GB','1206414000005',14,7999000,10,'blue',64, 1)
insert into Phones values('iPhone 12 64GB','1206414000006',14,7999000,10,'red',64, 1)

insert into Phones values('iPhone 12 128GB','1212814000001',14,8999000,10,'black',128, 1)
insert into Phones values('iPhone 12 128GB','1212814000002',14,8999000,10,'white',128, 1)
insert into Phones values('iPhone 12 128GB','1212814000003',14,8999000,10,'green',128, 1)
insert into Phones values('iPhone 12 128GB','1212814000004',14,8999000,10,'purple',128, 1)
insert into Phones values('iPhone 12 128GB','1212814000005',14,8999000,10,'blue',128, 1)
insert into Phones values('iPhone 12 128GB','1212814000006',14,8999000,10,'red',128, 1)

insert into Phones values('iPhone 12 256GB','1225614000001',14,9999000,10,'black',256, 1)
insert into Phones values('iPhone 12 256GB','1225614000002',14,9999000,10,'white',256, 1)
insert into Phones values('iPhone 12 256GB','1225614000003',14,9999000,10,'green',256, 1)
insert into Phones values('iPhone 12 256GB','1225614000004',14,9999000,10,'purple',256, 1)
insert into Phones values('iPhone 12 256GB','1225614000005',14,9999000,10,'blue',256, 1)
insert into Phones values('iPhone 12 256GB','1225614000006',14,9999000,10,'red',256, 1)

-- IPHONE 12 PRO 
insert into Phones values('iPhone 12 Pro 128GB','1206413000001',13,10099000,10,'gold',128, 1)
insert into Phones values('iPhone 12 Pro 128GB','1206413000002',13,10099000,10,'sliver',128, 1)
insert into Phones values('iPhone 12 Pro 128GB','1206413000003',13,10099000,10,'gray',128, 1)
insert into Phones values('iPhone 12 Pro 128GB','1206413000004',13,10099000,10,'blue',128, 1)

insert into Phones values('iPhone 12 Pro 256GB','1212813000001',13,10899000,10,'gold',256, 1)
insert into Phones values('iPhone 12 Pro 256GB','1212813000002',13,10899000,10,'sliver',256, 1)
insert into Phones values('iPhone 12 Pro 256GB','1212813000003',13,10899000,10,'gray',256, 1)
insert into Phones values('iPhone 12 Pro 256GB','1212813000004',13,10899000,10,'blue',256, 1)

insert into Phones values('iPhone 12 Pro 512GB','1225613000001',13,11890000,10,'gold',512, 1)
insert into Phones values('iPhone 12 Pro 512GB','1225613000002',13,11890000,10,'sliver',512, 1)
insert into Phones values('iPhone 12 Pro 512GB','1225613000003',13,11890000,10,'gray',512, 1)
insert into Phones values('iPhone 12 Pro 512GB','1225613000004',13,11890000,10,'blue',512, 1)

-- IPHONE 12 PRO MAX
insert into Phones values('iPhone 12 Pro Max 128GB','1206412000001',12,12199000,10,'gold',128, 1)
insert into Phones values('iPhone 12 Pro Max 128GB','1206412000002',12,12199000,10,'sliver',128, 1)
insert into Phones values('iPhone 12 Pro Max 128GB','1206412000003',12,12199000,10,'gray',128, 1)
insert into Phones values('iPhone 12 Pro Max 128GB','1206412000004',12,12199000,10,'blue',128, 1)

insert into Phones values('iPhone 12 Pro Max 256GB','1212812000001',12,12999000,10,'gold',256, 1)
insert into Phones values('iPhone 12 Pro Max 256GB','1212812000002',12,12999000,10,'sliver',256, 1)
insert into Phones values('iPhone 12 Pro Max 256GB','1212812000003',12,12999000,10,'gray',256, 1)
insert into Phones values('iPhone 12 Pro Max 256GB','1212812000004',12,12999000,10,'blue',256, 1)

insert into Phones values('iPhone 12 Pro Max 512GB','1225612000001',12,13999000,10,'gold',512, 1)
insert into Phones values('iPhone 12 Pro Max 512GB','1225612000002',12,13999000,10,'sliver',512, 1)
insert into Phones values('iPhone 12 Pro Max 512GB','1225612000003',12,13999000,10,'gray',512, 1)
insert into Phones values('iPhone 12 Pro Max 512GB','1225612000004',12,13999000,10,'blue',512, 1)
-- IPHONE 11 
insert into Phones values('iPhone 11 64GB','1106417000001',17,6199000,17,'black',64, 1)
insert into Phones values('iPhone 11 64GB','1106417000002',17,6199000,17,'white',64, 1)
insert into Phones values('iPhone 11 64GB','1106417000003',17,6199000,17,'green',64, 1)
insert into Phones values('iPhone 11 64GB','1106417000004',17,6199000,17,'purple',64, 1)
insert into Phones values('iPhone 11 64GB','1106417000005',17,6199000,17,'yellow',64, 1)
insert into Phones values('iPhone 11 64GB','1106417000006',17,6199000,17,'red',64, 1)

insert into Phones values('iPhone 11 128GB','1112817000001',17,7199000,17,'black',128, 1)
insert into Phones values('iPhone 11 128GB','1112817000002',17,7199000,17,'white',128, 1)
insert into Phones values('iPhone 11 128GB','1112817000003',17,7199000,17,'green',128, 1)
insert into Phones values('iPhone 11 128GB','1112817000004',17,7199000,17,'purple',128, 1)
insert into Phones values('iPhone 11 128GB','1112817000005',17,7199000,17,'yellow',128, 1)
insert into Phones values('iPhone 11 128GB','1112817000006',17,7199000,17,'red',128, 1)

insert into Phones values('iPhone 11 256GB','1125617000001',17,7999000,17,'black',256, 1)
insert into Phones values('iPhone 11 256GB','1125617000002',17,7999000,17,'white',256, 1)
insert into Phones values('iPhone 11 256GB','1125617000003',17,7999000,17,'green',256, 1)
insert into Phones values('iPhone 11 256GB','1125617000004',17,7999000,17,'purple',256, 1)
insert into Phones values('iPhone 11 256GB','1125617000005',17,7999000,17,'yellow',256, 1)
insert into Phones values('iPhone 11 256GB','1125617000006',17,7999000,17,'red',256, 1)

-- IPHONE 11 PRO
insert into Phones values('iPhone 11 Pro 64GB','1106416000001',16,7799000,16,'gold',64, 1)
insert into Phones values('iPhone 11 Pro 64GB','1106416000002',16,7799000,16,'gray',64, 1)
insert into Phones values('iPhone 11 Pro 64GB','1106416000003',16,7799000,16,'green',64, 1)

insert into Phones values('iPhone 11 Pro 128GB','1112816000001',16,8199000,16,'gold',128, 1)
insert into Phones values('iPhone 11 Pro 128GB','1112816000002',16,8199000,16,'gray',128, 1)
insert into Phones values('iPhone 11 Pro 128GB','1112816000003',16,8199000,16,'green',128, 1)

insert into Phones values('iPhone 11 Pro 256GB','1125616000001',16,8899000,16,'gold',256, 1)
insert into Phones values('iPhone 11 Pro 256GB','1125616000002',16,8899000,16,'gray',256, 1)
insert into Phones values('iPhone 11 Pro 256GB','1125616000003',16,8899000,16,'green',256, 1)

-- IPHONE 11 PRO MAX
insert into Phones values('iPhone 11 Pro Max 64GB','1106415000001',15,9699000,15,'gold',64, 1)
insert into Phones values('iPhone 11 Pro Max 64GB','1106415000002',15,9699000,15,'gray',64, 1)
insert into Phones values('iPhone 11 Pro Max 64GB','1106415000003',15,9699000,15,'green',64, 1)

insert into Phones values('iPhone 11 Pro Max 128GB','1112815000001',15,10899000,15,'gold',128, 1)
insert into Phones values('iPhone 11 Pro Max 128GB','1112815000002',15,10899000,15,'gray',128, 1)
insert into Phones values('iPhone 11 Pro Max 128GB','1112815000003',15,10899000,15,'green',128, 1)

insert into Phones values('iPhone 11 Pro Max 256GB','1125615000001',15,11799000,15,'gold',256, 1)
insert into Phones values('iPhone 11 Pro Max 256GB','1125615000002',15,11799000,15,'gray',256, 1)
insert into Phones values('iPhone 11 Pro Max 256GB','1112815000003',15,11799000,15,'green',256, 1)


-- SAMSUNG S24 ULTRA
insert into Phones values('Samsung Galaxy S24 Ultra 256GB','S242561800001',18,26490000,10,'gray',256, 1)
insert into Phones values('Samsung Galaxy S24 Ultra 256GB','S242561800002',18,26490000,10,'black',256, 1)
insert into Phones values('Samsung Galaxy S24 Ultra 256GB','S242561800003',18,26490000,10,'purple',256, 1)
insert into Phones values('Samsung Galaxy S24 Ultra 256GB','S242561800004',18,26490000,10,'gold',256, 1)

insert into Phones values('Samsung Galaxy S24 Ultra 512GB','S245121800001',18,29990000,10,'gray',512, 1)
insert into Phones values('Samsung Galaxy S24 Ultra 512GB','S245121800002',18,29990000,10,'black',512, 1)
insert into Phones values('Samsung Galaxy S24 Ultra 512GB','S245121800003',18,29990000,10,'purple',512, 1)
insert into Phones values('Samsung Galaxy S24 Ultra 512GB','S245121800004',18,29990000,10,'gold',512, 1)

insert into Phones values('Samsung Galaxy S24 Ultra 1TB','S240011800001',18,36990000,10,'gray',1024, 1)
insert into Phones values('Samsung Galaxy S24 Ultra 1TB','S240011800002',18,36990000,10,'black',1024, 1)
insert into Phones values('Samsung Galaxy S24 Ultra 1TB','S240011800003',18,36990000,10,'purple',1024, 1)
insert into Phones values('Samsung Galaxy S24 Ultra 1TB','S240011800004',18,36990000,10,'gold',1024, 1)
-- SAMSUNG S24 Plus
insert into Phones values('Samsung Galaxy S24 Plus 256GB','S242561900001',19,20490000,10,'gray',256, 1)
insert into Phones values('Samsung Galaxy S24 Plus 256GB','S242561900002',19,20490000,10,'black',256, 1)
insert into Phones values('Samsung Galaxy S24 Plus 256GB','S242561900003',19,20490000,10,'purple',256, 1)
insert into Phones values('Samsung Galaxy S24 Plus 256GB','S242561900004',19,20490000,10,'gold',256, 1)

insert into Phones values('Samsung Galaxy S24 Plus 512GB','S245121900001',19,23790000,10,'purple',512, 1)
insert into Phones values('Samsung Galaxy S24 Plus 512GB','S245121900002',19,23790000,10,'black',512, 1)
insert into Phones values('Samsung Galaxy S24 Plus 512GB','S245121900003',19,23790000,10,'gray',512, 1)
insert into Phones values('Samsung Galaxy S24 Plus 512GB','S245121900004',19,23790000,10,'gold',512, 1)
-- SAMSUNG S24
insert into Phones values('Samsung Galaxy S24 256GB','S242562000001',20,19790000,10,'gray',256, 1)
insert into Phones values('Samsung Galaxy S24 256GB','S242562000002',20,19790000,10,'black',256, 1)
insert into Phones values('Samsung Galaxy S24 256GB','S242562000003',20,19790000,10,'purple',256, 1)
insert into Phones values('Samsung Galaxy S24 256GB','S242562000004',20,19790000,10,'gold',256, 1)

insert into Phones values('Samsung Galaxy S24 512GB','S245122000001',20,22990000,10,'purple',512, 1)
insert into Phones values('Samsung Galaxy S24 512GB','S245122000002',20,22990000,10,'black',512, 1)
insert into Phones values('Samsung Galaxy S24 512GB','S245122000003',20,22990000,10,'gray',512, 1)
insert into Phones values('Samsung Galaxy S24 512GB','S245122000004',20,22990000,10,'gold',512, 1)
-- SAMSUNG S23 ULTRA 8GB
insert into Phones values('Samsung Galaxy S23 Ultra 8GB/256GB','S232562100001',21,21990000,10,'green',256, 1)
insert into Phones values('Samsung Galaxy S23 Ultra 8GB/256GB','S232562100002',21,21990000,10,'purple',256, 1)
insert into Phones values('Samsung Galaxy S23 Ultra 8GB/256GB','S232562100003',21,21990000,10,'cream',256, 1)
insert into Phones values('Samsung Galaxy S23 Ultra 8GB/256GB','S232562100004',21,21990000,10,'black',256, 1)

insert into Phones values('Samsung Galaxy S23 Ultra 8GB/512GB','S235122100001',21,26290000,10,'green',512, 1)
insert into Phones values('Samsung Galaxy S23 Ultra 8GB/512GB','S235122100002',21,26290000,10,'purple',512, 1)
insert into Phones values('Samsung Galaxy S23 Ultra 8GB/512GB','S235122100003',21,26290000,10,'cream',512, 1)
insert into Phones values('Samsung Galaxy S23 Ultra 8GB/512GB','S235122100004',21,26290000,10,'black',512, 1)
--Samsung s23 FE
insert into Phones values('Samsung Galaxy S23 FE 5G 128GB','S231282200001',22,11890000,10,'green',128, 1)
insert into Phones values('Samsung Galaxy S23 FE 5G 128GB','S231282200002',22,11890000,10,'white',128, 1)
insert into Phones values('Samsung Galaxy S23 FE 5G 128GB','S231282200003',22,11890000,10,'violet',128, 1)
insert into Phones values('Samsung Galaxy S23 FE 5G 128GB','S231282200004',22,11890000,10,'gray',128, 1)

insert into Phones values('Samsung Galaxy S23 FE 5G 256GB','S232562200001',22,14890000,10,'green',256, 1)
insert into Phones values('Samsung Galaxy S23 FE 5G 256GB','S232562200002',22,14890000,10,'white',256, 1)
insert into Phones values('Samsung Galaxy S23 FE 5G 256GB','S232562200003',22,14890000,10,'violet',256, 1)
insert into Phones values('Samsung Galaxy S23 FE 5G 256GB','S232562200004',22,14890000,10,'gray',256, 1)
--samsung s23
insert into Phones values('Samsung Galaxy S23 128GB','S232562300001',23,13990000,10,'green',128, 1)
insert into Phones values('Samsung Galaxy S23 128GB','S232562300002',23,13990000,10,'white',128, 1)
insert into Phones values('Samsung Galaxy S23 128GB','S232562300003',23,13990000,10,'violet',128, 1)
insert into Phones values('Samsung Galaxy S23 128GB','S232562300004',23,13990000,10,'black',128, 1)

insert into Phones values('Samsung Galaxy S23 256GB','S232562300001',23,14590000,10,'green',256, 1)
insert into Phones values('Samsung Galaxy S23 256GB','S232562300002',23,14590000,10,'white',256, 1)
insert into Phones values('Samsung Galaxy S23 256GB','S232562300003',23,14590000,10,'violet',256, 1)
insert into Phones values('Samsung Galaxy S23 256GB','S232562300004',23,14590000,10,'black',256, 1)
--samsung s22 ultra
insert into Phones values('Samsung Galaxy S22 Ultra 8GB/128GB','S221282400001',24,16590000,10,'black',128, 1)
insert into Phones values('Samsung Galaxy S22 Ultra 8GB/128GB','S221282400002',24,16590000,10,'white',128, 1)
insert into Phones values('Samsung Galaxy S22 Ultra 8GB/128GB','S221282400003',24,16590000,10,'green',128, 1)
--samsung s22
insert into Phones values('Samsung Galaxy S22 128GB','S221282500004',25,16590000,10,'black',128, 1)
-- SAMSUNG Z Fold5
insert into Phones values('Samsung Galaxy Z Fold5 256GB','ZFOLD52562601',26,34990000,10,'cream',256, 1)
insert into Phones values('Samsung Galaxy Z Fold5 256GB','ZFOLD52562602',26,34990000,10,'blue',256, 1)
insert into Phones values('Samsung Galaxy Z Fold5 256GB','ZFOLD52562603',26,34990000,10,'black',256, 1)
																   
insert into Phones values('Samsung Galaxy Z Fold5 512GB','ZFOLD55122601',26,36990000,10,'cream',512, 1)
insert into Phones values('Samsung Galaxy Z Fold5 512GB','ZFOLD55122602',26,36990000,10,'blue',512, 1)
insert into Phones values('Samsung Galaxy Z Fold5 512GB','ZFOLD55122603',26,36990000,10,'black',512, 1)

insert into Phones values('Samsung Galaxy Z Fold5 1TB','ZFOLD50012601',26,46990000,10,'cream',512, 1)
insert into Phones values('Samsung Galaxy Z Fold5 1TB','ZFOLD50012602',26,46990000,10,'blue',512, 1)
insert into Phones values('Samsung Galaxy Z Fold5 1TB','ZFOLD50012603',26,46990000,10,'black',512, 1)
-- SAMSUNG Z Fold4
insert into Phones values('Samsung Galaxy Z Fold4 256GB','ZFOLD42562701',27,22490000,10,'green',256, 1)
insert into Phones values('Samsung Galaxy Z Fold4 256GB','ZFOLD42562702',27,22490000,10,'black',256, 1)
insert into Phones values('Samsung Galaxy Z Fold4 256GB','ZFOLD42562703',27,22490000,10,'cream',256, 1)

insert into Phones values('Samsung Galaxy Z Fold4 512GB','ZFOLD45122701',27,24490000,10,'green',512, 1)
insert into Phones values('Samsung Galaxy Z Fold4 512GB','ZFOLD45122702',27,24490000,10,'black',512, 1)
insert into Phones values('Samsung Galaxy Z Fold4 512GB','ZFOLD45122703',27,24490000,10,'cream',512, 1)
-- SAMSUNG Z Fold3
insert into Phones values('Samsung Galaxy Z Fold3 256GB','ZFOLD32562801',28,12790000,10,'green',256, 1)
insert into Phones values('Samsung Galaxy Z Fold3 256GB','ZFOLD32562802',28,12790000,10,'gray',256, 1)
insert into Phones values('Samsung Galaxy Z Fold3 256GB','ZFOLD32562803',28,12790000,10,'black',256, 1)

insert into Phones values('Samsung Galaxy Z Fold3 512GB','ZFOLD35122801',28,13490000,10,'green',512, 1)
insert into Phones values('Samsung Galaxy Z Fold3 512GB','ZFOLD35122802',28,13490000,10,'gray',512, 1)
insert into Phones values('Samsung Galaxy Z Fold3 512GB','ZFOLD35122803',28,13490000,10,'black',512, 1)
-- SAMSUNG Z Flip5
insert into Phones values('Samsung Galaxy Z Flip5 256GB','ZFLIP52562901',29,19990000,10,'green',256, 1)
insert into Phones values('Samsung Galaxy Z Flip5 256GB','ZFLIP52562902',29,19990000,10,'purple',256, 1)
insert into Phones values('Samsung Galaxy Z Flip5 256GB','ZFLIP52562903',29,19990000,10,'gray',256, 1)
insert into Phones values('Samsung Galaxy Z Flip5 256GB','ZFLIP52562904',29,19990000,10,'cream',256, 1)

insert into Phones values('Samsung Galaxy Z Flip5 512GB','ZFLIP55122901',29,21990000,10,'purple',512, 1)
insert into Phones values('Samsung Galaxy Z Flip5 512GB','ZFLIP55122902',29,21990000,10,'green',512, 1)
insert into Phones values('Samsung Galaxy Z Flip5 512GB','ZFLIP55122903',29,21990000,10,'gray',512, 1)
insert into Phones values('Samsung Galaxy Z Flip5 512GB','ZFLIP55122904',29,21990000,10,'cream',512, 1)
-- SAMSUNG Z FLIP4 
insert into Phones values('Samsung Galaxy Z Flip4 256GB','ZFLIP42563001',30,12990000,10,'purple',256, 1)
insert into Phones values('Samsung Galaxy Z Flip4 256GB','ZFLIP42563002',30,12990000,10,'blue',256, 1)
insert into Phones values('Samsung Galaxy Z Flip4 256GB','ZFLIP42563003',30,12990000,10,'gray',256, 1)
insert into Phones values('Samsung Galaxy Z Flip4 256GB','ZFLIP42562304',30,12990000,10,'yellow',256, 1)

insert into Phones values('Samsung Galaxy Z Flip4 512GB','ZFLIP45123001',30,14990000,10,'blue',512, 1)
insert into Phones values('Samsung Galaxy Z Flip4 512GB','ZFLIP45123002',30,14990000,10,'purple',512, 1)
insert into Phones values('Samsung Galaxy Z Flip4 512GB','ZFLIP45123003',30,14990000,10,'blue',512, 1)
insert into Phones values('Samsung Galaxy Z Flip4 512GB','ZFLIP45123004',30,14990000,10,'yellow',512, 1)
-- SAMSUNG Z FLIP3 
insert into Phones values('Samsung Galaxy Z Flip3 128GB','ZFLIP41283101',31,10590000,10,'black',128, 1)
insert into Phones values('Samsung Galaxy Z Flip3 128GB','ZFLIP41283102',31,10590000,10,'green',128, 1)
insert into Phones values('Samsung Galaxy Z Flip3 128GB','ZFLIP41283103',31,10590000,10,'purple',128, 1)
insert into Phones values('Samsung Galaxy Z Flip3 128GB','ZFLIP41283104',31,10590000,10,'cream',128, 1)

insert into Phones values('Samsung Galaxy Z Flip3 256GB','ZFLIP32563101',31,12090000,10,'green',256, 1)
insert into Phones values('Samsung Galaxy Z Flip3 256GB','ZFLIP32563102',31,12090000,10,'black',256, 1)
insert into Phones values('Samsung Galaxy Z Flip3 256GB','ZFLIP32563103',31,12090000,10,'purple',256, 1)
insert into Phones values('Samsung Galaxy Z Flip3 256GB','ZFLIP32563104',31,12090000,10,'cream',256, 1)
--samsung galaxy m34
insert into Phones values('Samsung Galaxy M34 128GB','SSM341283201',32,5790000,10,'green',128, 1)
insert into Phones values('Samsung Galaxy M34 128GB','SSM341283202',32,5790000,10,'black',128, 1)
--samsung galaxy m54
insert into Phones values('Samsung Galaxy M54 256GB','SSM542563301',33,8990000,10,'green',256, 1)
insert into Phones values('Samsung Galaxy M54 256GB','SSM542563302',33,8990000,10,'black',256, 1)

--samsung galaxy a35
insert into Phones values('Samsung Galaxy A35 128GB','SSA351283401',34,7990000,10,'black',128, 1)
insert into Phones values('Samsung Galaxy A35 128GB','SSA351283402',34,7990000,10,'blue',128, 1)

insert into Phones values('Samsung Galaxy A35 256GB','SSM542563401',34,8880000,10,'blue',256, 1)
insert into Phones values('Samsung Galaxy A35 256GB','SSM542563402',34,8880000,10,'black',256, 1)
--samsung galaxy a14
insert into Phones values('Samsung Galaxy A14 128GB','SSA141283501',35,3590000,10,'black',128, 1)
insert into Phones values('Samsung Galaxy A14 128GB','SSA141283502',35,3590000,10,'gray',128, 1)
insert into Phones values('Samsung Galaxy A14 128GB','SSA141823503',35,3590000,10,'red',128, 1)
--vivo x70
insert into Phones values('Vivo x70 128GB','VVX701283601',36,7890000,10,'black',128, 1)
insert into Phones values('Vivo x70 128GB','VVX701283602',36,7890000,10,'green',128, 1)
--vivo x70 pro
insert into Phones values('Vivo x70 Pro 5G 256GB','VVX70P2563701',37,11490000,10,'green',256, 1)
insert into Phones values('Vivo x70 Pro 5G 256GB','VVX70P2563702',37,11490000,10,'black',256, 1)
--vivo x80
insert into Phones values('Vivo x80 5G 256GB','VVX802563801',38,10490000,10,'green',256, 1)
insert into Phones values('Vivo x80 5G 256GB','VVX802563802',38,10490000,10,'black',256, 1)
--vivo x80 Pro
insert into Phones values('Vivo x80 Pro 5G 256GB','VVX80P2563901',39,10490000,10,'black',256, 1)
insert into Phones values('Vivo x80 Pro 5G 512GB','VVX80P5123902',39,10490000,10,'black',512, 1)
--vivo x60
insert into Phones values('Vivo x60 5G 128GB','VVX601284001',40,6990000,10,'blue',128, 1)
insert into Phones values('Vivo x60 5G 128GB','VVX601284002',40,6990000,10,'black',128, 1)
-- VIVO V29E 12GB
insert into Phones values('Vivo V29e 12GB 256GB','VV29E25641001',41,8990000,10,'black',256, 1)
insert into Phones values('Vivo V29e 12GB 256GB','VV29E25641002',41,8990000,10,'blue',256, 1)
-- VIVO V29
insert into Phones values('Vivo V29 12GB 256GB','VV2925642001',42,9900000,10,'black',256, 1)
insert into Phones values('Vivo V29 12GB 256GB','VV2925642002',42,9900000,10,'purple',256, 1)
-- VIVO V25e
insert into Phones values('Vivo V25e 8GB 128GB','VV25E25643001',43,5490000,10,'black',128, 1)
insert into Phones values('Vivo V25e 8GB 128GB','VV25E25643002',43,5490000,10,'blue',128, 1)
-- VIVO V25
insert into Phones values('Vivo V25 8GB 128GB','VV2512844001',44,6990000,10,'black',128, 1)
insert into Phones values('Vivo V25 8GB 128GB','VV2512844002',44,6990000,10,'yellow',128, 1)
-- VIVO V27E
insert into Phones values('Vivo V27e 256GB','VV27E25645001',45,8990000,10,'black',256, 1)
insert into Phones values('Vivo V27e 256GB','VV27E25645002',45,8990000,10,'purple',256, 1)
-- VIVO V27
insert into Phones values('Vivo V27 256GB','VV27E25646001',46,9400000,10,'blue',256, 1)
insert into Phones values('Vivo V27 256GB','VV27E25646002',46,9400000,10,'green',256, 1)
-- VIVO Y100
insert into Phones values('Vivo Y100 8GB 128GB','VVY1001284701',47,7050000,10,'black',128, 1)
insert into Phones values('Vivo Y100 8GB 128GB','VVY1001284702',47,7050000,10,'green',128, 1)
-- VIVO Y03
insert into Phones values('Vivo Y03 64GB','VVY1000644801',48,2990000,10,'black',64, 1)
insert into Phones values('Vivo Y03 64GB','VVY1000644802',48,2990000,10,'green',64, 1)

insert into Phones values('Vivo Y03 128GB','VVY1001284701',48,7050000,10,'black',128, 1)
insert into Phones values('Vivo Y03 128GB','VVY1001284702',48,7050000,10,'green',128, 1)
-- VIVO Y36
insert into Phones values('Vivo Y36 128GB','VY36128490001',49,3990000,10,'black',128, 1)
insert into Phones values('Vivo Y36 128GB','VY36128490002',49,3990000,10,'aqua',128, 1)

insert into Phones values('Vivo Y36 256GB','VY36256490001',49,4690000,10,'black',256, 1)
insert into Phones values('Vivo Y36 256GB','VY36256490002',49,4690000,10,'aqua',256, 1)
--Vivo Y03
insert into Phones values('Vivo Y35 128GB','VY35128500001',50,4590000,10,'yellow',128, 1)
insert into Phones values('Vivo Y35 128GB','VY35128500002',50,4590000,10,'black',128, 1)
--Vivo T1
insert into Phones values('Vivo T1 128GB','VT112851001',51,7990000,10,'black',128, 1)
insert into Phones values('Vivo T1 128GB','VT112851002',51,7990000,10,'green',128, 1)
--OPPO Find N3
insert into Phones values('OPPO Find N3 5G 512GB','FN35125200001',52,41990000,10,'yellow',512, 1)
insert into Phones values('OPPO Find N3 5G 512GB','FN35125200002',52,41990000,10,'black',512, 1)
-- OPPO Find N3 Flip
insert into Phones values('OPPO Find N3 Flip 5G 256GB','FN3F256530001',53,22990000,10,'pink',256, 1)
insert into Phones values('OPPO Find N3 Flip 5G 256GB','FN3F256530002',53,22990000,10,'black',256, 1)
insert into Phones values('OPPO Find N3 Flip 5G 256GB','FN3F256530003',53,22990000,10,'yellow',256, 1)
-- OPPO Find N2 Flip 5G
insert into Phones values('OPPO Find N2 Flip 5G 256GB','FN2F256540001',54,19990000,10,'black',256, 1)
insert into Phones values('OPPO Find N2 Flip 5G 256GB','FN2F256540002',54,19990000,10,'purple',256, 1)
-- OPPO Find X5 Pro
insert into Phones values('OPPO Find X5 Pro 12GB 256GB','FX5P256550001',55,16790000,10,'black',256, 1)
insert into Phones values('OPPO Find X5 Pro 12GB 256GB','FX5P256550002',55,16790000,10,'white',256, 1)
-- OPPO Reno 11 F 
insert into Phones values('OPPO Reno 11 F 8GB 256GB','OPR11F256560001',56,16790000,10,'blue',256, 1)
insert into Phones values('OPPO Reno 11 F 8GB 256GB','OPR11F256560002',56,16790000,10,'green',256, 1)
-- OPPO RENO 11 Pro 5G
insert into Phones values('OPPO Reno11 Pro 5G 512GB','OR11P51257001',57,16990000,10,'gray',512, 1)
insert into Phones values('OPPO Reno11 Pro 5G 512GB','OR11P51257002',57,16990000,10,'white',512, 1)
-- OPPO RENO 11
insert into Phones values('OPPO RENO 11 5G 256GB','OPR112565801',58,10790000,10,'gray',256, 1)
insert into Phones values('OPPO RENO 11 5G 256GB','OPR112565802',58,10790000,10,'green',256, 1)
-- OPPO RENO 10 Pro+ 5G
insert into Phones values('OPPO Reno10 Pro+ 5G 256GB','OR10P25659001',59,15990000,10,'gray',256, 1)
insert into Phones values('OPPO Reno10 Pro+ 5G 256GB','OR10P25659002',59,15990000,10,'purple',256, 1)
-- OPPO RENO 10 Pro 5G
insert into Phones values('OPPO Reno10 Pro 5G 256GB','OR10P25660001',60,11290000,10,'gray',256, 1)
insert into Phones values('OPPO Reno10 Pro 5G 256GB','OR10P25660002',60,11290000,10,'purple',256, 1)
-- OPPO RENO 10 
insert into Phones values('OPPO Reno10 5G 128GB','OR10P12861001',61,7890000,10,'gray',128, 1)
insert into Phones values('OPPO Reno10 5G 128GB','OR10P12861002',61,7890000,10,'blue',128, 1)
insert into Phones values('OPPO Reno10 5G 256GB','OR10P25661001',61,8990000,10,'gray',256, 1)
insert into Phones values('OPPO Reno10 5G 256GB','OR10P25661002',61,8990000,10,'blue',256, 1)
--OPPO A79
insert into Phones values('OPPO A79 5G 256GB','OA7925662001',62,7990000,10,'black',256, 1)
insert into Phones values('OPPO A79 5G 256GB','OA7925662002',62,7990000,10,'purle',256, 1)
--OPPO A98
insert into Phones values('OPPO A98 5G 256GB','OA9825663001',63,7390000,10,'black',256, 1)
insert into Phones values('OPPO A98 5G 256GB','OA9825663002',63,7390000,10,'blue',256, 1)
--OPPO A78
insert into Phones values('OPPO A78 5G 256GB','OA7825664001',64,7390000,10,'black',256, 1)
insert into Phones values('OPPO A78 5G 256GB','OA7825664002',64,7390000,10,'green',256, 1)
--xiaomi 14 ultra
insert into Phones values('Xiaomi 14 Ultra 512GB','X14U51265001',65,32990000,10,'black',512, 1)
insert into Phones values('Xiaomi 14 Ultra 512GB','X14U51265001',65,32990000,10,'gray',512, 1)
--xiaomi 14
insert into Phones values('Xiaomi 14 256GB','X1425666001',66,32990000,10,'black',256, 1)
insert into Phones values('Xiaomi 14 256GB','X1425666002',66,32990000,10,'white',256, 1)
insert into Phones values('Xiaomi 14 256GB','X1425666003',66,32990000,10,'green',256, 1)

insert into Phones values('Xiaomi 14 512GB','X1451266001',66,32990000,10,'black',512, 1)
insert into Phones values('Xiaomi 14 512GB','X1451266002',66,32990000,10,'white',512, 1)
insert into Phones values('Xiaomi 14 512GB','X1451266003',66,32990000,10,'green',512, 1)
-- XIAOMI 13T PRO 5G
insert into Phones values('Xiaomi 13T Pro 5G 256GB','X13T25667001',67,11790000,10,'black',256, 1)
insert into Phones values('Xiaomi 13T Pro 5G 256GB','X13T25667002',67,11790000,10,'blue',256, 1)
insert into Phones values('Xiaomi 13T Pro 5G 256GB','X13T25667003',67,11790000,10,'green',256, 1)

insert into Phones values('Xiaomi 13T Pro 5G 512GB','X13T25667001',67,14790000,10,'black',512, 1)
insert into Phones values('Xiaomi 13T Pro 5G 512GB','X13T25667002',67,14790000,10,'blue',512, 1)
insert into Phones values('Xiaomi 13T Pro 5G 512GB','X13T25667003',67,14790000,10,'green',512, 1)
--Xiaomi Redmi Note 13 Pro Plus
insert into Phones values('Xiaomi Redmi Note 13 Pro Plus 5G 256GB','XR13P25668001',68,9900000,10,'black',256, 1)
insert into Phones values('Xiaomi Redmi Note 13 Pro Plus 5G 256GB','XR13P25668002',68,9900000,10,'white',256, 1) 
insert into Phones values('Xiaomi Redmi Note 13 Pro Plus 5G 256GB','XR13P25668003',68,9900000,10,'purple',256, 1)
--Xiaomi Redmi Note 13 Pro
insert into Phones values('Xiaomi Redmi Note 13 Pro 5G 256GB','XR13P25669001',69,8690000,10,'black',256, 1)
insert into Phones values('Xiaomi Redmi Note 13 Pro 5G 256GB','XR13P25669002',69,8690000,10,'green',256, 1) 
insert into Phones values('Xiaomi Redmi Note 13 Pro 5G 256GB','XR13P25669003',69,8690000,10,'purple',256, 1)
--Xiaomi 12T pro
insert into Phones values('Xiaomi 12T Pro 256GB','X12TP25670001',70,14690000,10,'black',256, 1)
insert into Phones values('Xiaomi 12T Pro 256GB','X12TP25670002',70,14690000,10,'gray',256, 1)
--Xiaomi 12T
insert into Phones values('Xiaomi 12T 128GB','X12T12871001',71,8990000,10,'black',128, 1)
insert into Phones values('Xiaomi 12T 128GB','X12T12871002',71,8990000,10,'blue',128, 1)
insert into Phones values('Xiaomi 12T 128GB','X12T12871003',71,8990000,10,'gray',128, 1)
-- XIAOMI REDMI A2
insert into Phones values('Xiaomi Redmi A2 32GB','XRA2327201',72,2190000,10,'blue',32, 1)
insert into Phones values('Xiaomi Redmi A2 32GB','XRA2327202',72,2190000,10,'black',32, 1)
insert into Phones values('Xiaomi Redmi A2 32GB','XRA2327203',72,2190000,10,'green',32, 1)
-- XIAOMI REDMI A2+
insert into Phones values('Xiaomi Redmi A2+ 64GB','XRA2P647301',73,2790000,10,'blue',64, 1)
insert into Phones values('Xiaomi Redmi A2+ 64GB','XRA2P647302',73,2790000,10,'black',64, 1)
insert into Phones values('Xiaomi Redmi A2+ 64GB','XRA2P647303',73,2790000,10,'green',64, 1)
--xiaomi redmi note 11
insert into Phones values('Xiaomi Redmi Note 11 128GB','XRN111287401',74,4090000,10,'blue',128, 1)
insert into Phones values('Xiaomi Redmi Note 11 128GB','XRN111287402',74,4090000,10,'purple',128, 1)
insert into Phones values('Xiaomi Redmi Note 11 128GB','XRN111287403',74,4090000,10,'gray',128, 1)
--xiaomi redmi note 11 pro
insert into Phones values('Xiaomi Redmi Note 11 Pro 128GB','XRN11P1287501',75,5790000,10,'blue',128, 1)
insert into Phones values('Xiaomi Redmi Note 11 Pro 128GB','XRN11P1287502',75,5790000,10,'white',128, 1)
insert into Phones values('Xiaomi Redmi Note 11 Pro 128GB','XRN111P287503',75,5790000,10,'gray',128, 1)
--xiaomi redmi note 11 pro+
insert into Phones values('Xiaomi Redmi Note 11 Pro+ 128GB','XRN11P1287501',75,5790000,10,'blue',128, 1)
insert into Phones values('Xiaomi Redmi Note 11 Pro+ 128GB','XRN11P1287502',75,5790000,10,'green',128, 1)
insert into Phones values('Xiaomi Redmi Note 11 Pro+ 128GB','XRN111P287503',75,5790000,10,'blue',128, 1)

insert into Phones values('Xiaomi Redmi Note 11 Pro+ 256GB','XRN11PP2567601',76,6590000,10,'black',256, 1)
insert into Phones values('Xiaomi Redmi Note 11 Pro+ 256GB','XRN11PP2567602',76,6590000,10,'green',256, 1)
insert into Phones values('Xiaomi Redmi Note 11 Pro+ 256GB','XRN11PP2567603',76,6590000,10,'blue',256, 1)


-- Huawei MATE 30 PRO
insert into Phones values ('Huawei Mate 30 Pro 256GB', 'HM30P256001', 77, 14490000,10, 'blue', 256, 1)
-- Huawei mate 20 pro
insert into Phones values ('Huawei Mate 20 Pro 128GB', 'HM20P128001', 78, 13990000,10, 'black', 128, 1)
insert into Phones values ('Huawei Mate 20 Pro 128GB', 'HM20P128002', 78, 13990000,10, 'green', 128, 1)
insert into Phones values ('Huawei Mate 20 Pro 128GB', 'HM20P128003', 78, 13990000,10, 'purple', 128, 1)
-- Huawei mate 20x
insert into Phones values ('Huawei Mate 20X 128GB', 'HM20X128001', 79, 15950000,10, 'purple', 128, 1)
-- Huawei mate 20
insert into Phones values ('Huawei Mate 20 128GB', 'HM201280001', 80, 12990000,10, 'black', 128, 1)
insert into Phones values ('Huawei Mate 20 128GB', 'HM201280002', 80, 12990000,10, 'blue', 128, 1)
-- Huawei P40 Pro+
insert into Phones values ('Huawei P40 Pro Plus 256GB', 'HMP40256001', 81, 12990000, 10,'gray', 256, 1)
-- Huawei P40 Pro
insert into Phones values ('Huawei P40 Pro 256GB', 'HMP40256001', 82, 12990000,10, 'blue', 256, 1)
insert into Phones values ('Huawei P40 Pro 256GB', 'HMP40256002', 82, 12990000,10, 'gray', 256, 1)
-- Huawei P30 Pro
insert into Phones values ('Huawei P30 Pro 256GB', 'HMP30P25601', 83, 12490000,10, 'blue', 256, 1)
insert into Phones values ('Huawei P30 Pro 256GB', 'HMP30P25602', 83, 12490000,10, 'purple', 256, 1)
-- Huawei P30
insert into Phones values ('Huawei P30 128GB', 'HMP30256001', 84, 12990000,10, 'black', 128, 1)
insert into Phones values ('Huawei P30 128GB', 'HMP30256002', 84, 12990000,10, 'blue', 128, 1)
-- Huawei Nova 7i
insert into Phones values ('Huawei Nova 7i 128GB', 'HMN7I128001', 85, 14440000,10, 'green', 128, 1)
insert into Phones values ('Huawei Nova 7i 128GB', 'HMN7I128002', 85, 14440000,10, 'pink', 128, 1)
-- Huawei Nova 5t
insert into Phones values ('Huawei Nova 5t 128GB', 'HMN5T128001', 86, 8290000,10, 'blue', 128, 1)
insert into Phones values ('Huawei Nova 5t 128GB', 'HMN5T128002', 86, 8290000, 10,'green', 128, 1)
-- Huawei Nova 3i
insert into Phones values ('Huawei Nova 3i 128GB', 'HMN3I128001', 87, 8290000, 10,'black', 128, 1)
insert into Phones values ('Huawei Nova 3i 128GB', 'HMN3I128002', 87, 8290000, 10,'purple', 128, 1)
insert into Phones values ('Huawei Nova 3i 128GB', 'HMN3I128003', 87, 8290000, 10,'white', 128, 1)
--Image IPHONE 15
--128GB
insert into Images values(1, '["iphone-15-black.jpg", "iphone-15-black-1.jpg", "iphone-15-black-2.jpg", "iphone-15-black-3.jpg"]', 1)
insert into Images values(2, '["iphone-15-green.jpg", "iphone-15-green-1.jpg", "iphone-15-green-2.jpg", "iphone-15-green-3.jpg"]', 1)
insert into Images values(3, '["iphone-15-pink.jpg", "iphone-15-pink-1.jpg", "iphone-15-pink-2.jpg", "iphone-15-pink-3.jpg"]', 1)
insert into Images values(4, '["iphone-15-blue.jpg", "iphone-15-blue-1.jpg", "iphone-15-blue-2.jpg", "iphone-15-blue-3.jpg"]', 1)
insert into Images values(5, '["iphone-15-yellow.jpg", "iphone-15-yellow-1.jpg", "iphone-15-yellow-2.jpg", "iphone-15-yellow-3.jpg"]', 1)
--256GB
insert into Images values(6, '["iphone-15-black.jpg", "iphone-15-black-1.jpg", "iphone-15-black-2.jpg", "iphone-15-black-3.jpg"]', 1)
insert into Images values(7, '["iphone-15-green.jpg", "iphone-15-green-1.jpg", "iphone-15-green-2.jpg", "iphone-15-green-3.jpg"]', 1)
insert into Images values(8, '["iphone-15-pink.jpg", "iphone-15-pink-1.jpg", "iphone-15-pink-2.jpg", "iphone-15-pink-3.jpg"]', 1)
insert into Images values(9, '["iphone-15-blue.jpg", "iphone-15-blue-1.jpg", "iphone-15-blue-2.jpg", "iphone-15-blue-3.jpg"]', 1)
insert into Images values(10,'["iphone-15-yellow.jpg", "iphone-15-yellow-1.jpg", "iphone-15-yellow-2.jpg", "iphone-15-yellow-3.jpg"]', 1)
--512GB
insert into Images values(11, '["iphone-15-black.jpg", "iphone-15-black-1.jpg", "iphone-15-black-2.jpg", "iphone-15-black-3.jpg"]', 1)
insert into Images values(12, '["iphone-15-green.jpg", "iphone-15-green-1.jpg", "iphone-15-green-2.jpg", "iphone-15-green-3.jpg"]', 1)
insert into Images values(13, '["iphone-15-pink.jpg", "iphone-15-pink-1.jpg", "iphone-15-pink-2.jpg", "iphone-15-pink-3.jpg"]', 1)
insert into Images values(14, '["iphone-15-blue.jpg", "iphone-15-blue-1.jpg", "iphone-15-blue-2.jpg", "iphone-15-blue-3.jpg"]', 1)
insert into Images values(15, '["iphone-15-yellow.jpg","iphone-15-yellow-1.jpg", "iphone-15-yellow-2.jpg", "iphone-15-yellow-3.jpg"]', 1)
-- Image IPHONE 15 PLUS
--128GB
insert into Images values(16, '["iphone-15-plus-pink.jpg", "iphone-15-plus-pink-1.jpg", "iphone-15-plus-pink-2.jpg", "iphone-15-plus-pink-3.jpg"]', 1)
insert into Images values(17, '["iphone-15-plus-green.jpg", "iphone-15-plus-green-1.jpg", "iphone-15-plus-green-2.jpg", "iphone-15-plus-green-3.jpg"]', 1)
insert into Images values(18, '["iphone-15-plus-blue.jpg", "iphone-15-plus-blue-1.jpg", "iphone-15-plus-blue-2.jpg", "iphone-15-plus-blue-3.jpg"]', 1)
insert into Images values(19, '["iphone-15-plus-black.jpg", "iphone-15-plus-black-1.jpg", "iphone-15-plus-black-2.jpg", "iphone-15-plus-black-3.jpg"]', 1)
insert into Images values(20, '["iphone-15-plus-yellow.jpg", "iphone-15-yellow-1.jpg", "iphone-15-plus-yellow-2.jpg", "iphone-15-plus-yellow-3.jpg"]', 1)
--256GB
insert into Images values(21, '["iphone-15-plus-pink.jpg", "iphone-15-plus-pink-1.jpg", "iphone-15-plus-pink-2.jpg", "iphone-15-plus-pink-3.jpg"]', 1)
insert into Images values(22, '["iphone-15-plus-green.jpg", "iphone-15-plus-green-1.jpg", "iphone-15-plus-green-2.jpg", "iphone-15-plus-green-3.jpg"]', 1)
insert into Images values(23, '["iphone-15-plus-blue.jpg", "iphone-15-plus-blue-1.jpg", "iphone-15-plus-blue-2.jpg", "iphone-15-plus-blue-3.jpg"]', 1)
insert into Images values(24, '["iphone-15-plus-black.jpg", "iphone-15-plus-black-1.jpg", "iphone-15-plus-black-2.jpg", "iphone-15-plus-black-3.jpg"]', 1)
insert into Images values(25, '["iphone-15-plus-yellow.jpg", "iphone-15-yellow-1.jpg", "iphone-15-plus-yellow-2.jpg", "iphone-15-plus-yellow-3.jpg"]', 1)
--512GB
insert into Images values(26, '["iphone-15-plus-pink.jpg", "iphone-15-plus-pink-1.jpg", "iphone-15-plus-pink-2.jpg", "iphone-15-plus-pink-3.jpg"]', 1)
insert into Images values(27, '["iphone-15-plus-green.jpg", "iphone-15-plus-green-1.jpg", "iphone-15-plus-green-2.jpg", "iphone-15-plus-green-3.jpg"]', 1)
insert into Images values(28, '["iphone-15-plus-blue.jpg", "iphone-15-plus-blue-1.jpg", "iphone-15-plus-blue-2.jpg", "iphone-15-plus-blue-3.jpg"]', 1)
insert into Images values(29, '["iphone-15-plus-black.jpg", "iphone-15-plus-black-1.jpg", "iphone-15-plus-black-2.jpg", "iphone-15-plus-black-3.jpg"]', 1)
insert into Images values(30, '["iphone-15-plus-yellow.jpg", "iphone-15-yellow-1.jpg", "iphone-15-plus-yellow-2.jpg", "iphone-15-plus-yellow-3.jpg"]', 1)
--Image IPHONE 15 PRO
--128GB
insert into Images values(31, '["iphone-15-pro-titan-black.jpg", "iphone-15-pro-titan-black-1.jpg", "iphone-15-pro-titan-black-2.jpg", "iphone-15-pro-titan-black-3.jpg"]', 1)
insert into Images values(32, '["iphone-15-pro-titan-white.jpg", "iphone-15-pro-titan-white-1.jpg", "iphone-15-pro-titan-white-2.jpg", "iphone-15-pro-titan-white-3.jpg"]', 1)
insert into Images values(33, '["iphone-15-pro-titan-blue.jpg", "iphone-15-pro-titan-blue-1.jpg", "iphone-15-pro-titan-blue-2.jpg", "iphone-15-pro-titan-blue-3.jpg"]', 1)
insert into Images values(34, '["iphone-15-pro-titan-natural.jpg", "iphone-15-pro-titan-natural-1.jpg", "iphone-15-pro-titan-natural-2.jpg", "iphone-15-pro-titan-natural-3.jpg"]', 1)
--256GB
insert into Images values(35, '["iphone-15-pro-titan-black.jpg", "iphone-15-pro-titan-black-1.jpg", "iphone-15-pro-titan-black-2.jpg", "iphone-15-pro-titan-black-3.jpg"]', 1)
insert into Images values(36, '["iphone-15-pro-titan-white.jpg", "iphone-15-pro-titan-white-1.jpg", "iphone-15-pro-titan-white-2.jpg", "iphone-15-pro-titan-white-3.jpg"]', 1)
insert into Images values(37, '["iphone-15-pro-titan-blue.jpg", "iphone-15-pro-titan-blue-1.jpg", "iphone-15-pro-titan-blue-2.jpg", "iphone-15-pro-titan-blue-3.jpg"]', 1)
insert into Images values(38, '["iphone-15-pro-titan-natural.jpg", "iphone-15-pro-titan-natural-1.jpg", "iphone-15-pro-titan-natural-2.jpg", "iphone-15-pro-titan-natural-3.jpg"]', 1)
--512GB
insert into Images values(39, '["iphone-15-pro-titan-black.jpg", "iphone-15-pro-titan-black-1.jpg", "iphone-15-pro-titan-black-2.jpg", "iphone-15-pro-titan-black-3.jpg"]', 1)
insert into Images values(40, '["iphone-15-pro-titan-white.jpg", "iphone-15-pro-titan-white-1.jpg", "iphone-15-pro-titan-white-2.jpg", "iphone-15-pro-titan-white-3.jpg"]', 1)
insert into Images values(41, '["iphone-15-pro-titan-blue.jpg", "iphone-15-pro-titan-blue-1.jpg", "iphone-15-pro-titan-blue-2.jpg", "iphone-15-pro-titan-blue-3.jpg"]', 1)
insert into Images values(42, '["iphone-15-pro-titan-natural.jpg", "iphone-15-pro-titan-natural-1.jpg", "iphone-15-pro-titan-natural-2.jpg", "iphone-15-pro-titan-natural-3.jpg"]', 1)
--1TB
insert into Images values(43, '["iphone-15-pro-titan-black.jpg", "iphone-15-pro-titan-black-1.jpg", "iphone-15-pro-titan-black-2.jpg", "iphone-15-pro-titan-black-3.jpg"]', 1)
insert into Images values(44, '["iphone-15-pro-titan-white.jpg", "iphone-15-pro-titan-white-1.jpg", "iphone-15-pro-titan-white-2.jpg", "iphone-15-pro-titan-white-3.jpg"]', 1)
insert into Images values(45, '["iphone-15-pro-titan-blue.jpg", "iphone-15-pro-titan-blue-1.jpg", "iphone-15-pro-titan-blue-2.jpg", "iphone-15-pro-titan-blue-3.jpg"]', 1)
insert into Images values(46, '["iphone-15-pro-titan-natural.jpg", "iphone-15-pro-titan-natural-1.jpg", "iphone-15-pro-titan-natural-2.jpg", "iphone-15-pro-titan-natural-3.jpg"]', 1)
--Image IPHONE 15 PRO MAX
insert into Images values(47, '["iphone-15-pro-max-titan-black.jpg", "iphone-15-pro-max-titan-black-1.jpg", "iphone-15-pro-max-titan-black-2.jpg", "iphone-15-pro-max-titan-black-3.jpg"]', 1)
insert into Images values(48, '["iphone-15-pro-max-titan-white.jpg", "iphone-15-pro-max-titan-white-1.jpg", "iphone-15-pro-max-titan-white-2.jpg", "iphone-15-pro-max-titan-white-3.jpg"]', 1)
insert into Images values(49, '["iphone-15-pro-max-titan-blue.jpg", "iphone-15-pro-max-titan-blue-1.jpg", "iphone-15-pro-max-titan-blue-2.jpg", "iphone-15-pro-max-titan-blue-3.jpg"]', 1)
insert into Images values(50, '["iphone-15-pro-max-titan-natural.jpg", "iphone-15-pro-max-titan-natural-1.jpg", "iphone-15-pro-max-titan-natural-2.jpg", "iphone-15-pro-max-titan-natural-3.jpg"]', 1)

insert into Images values(51, '["iphone-15-pro-max-titan-black.jpg", "iphone-15-pro-max-titan-black-1.jpg", "iphone-15-pro-max-titan-black-2.jpg", "iphone-15-pro-max-titan-black-3.jpg"]', 1)
insert into Images values(52, '["iphone-15-pro-max-titan-white.jpg", "iphone-15-pro-max-titan-white-1.jpg", "iphone-15-pro-max-titan-white-2.jpg", "iphone-15-pro-max-titan-white-3.jpg"]', 1)
insert into Images values(53, '["iphone-15-pro-max-titan-blue.jpg", "iphone-15-pro-max-titan-blue-1.jpg", "iphone-15-pro-max-titan-blue-2.jpg", "iphone-15-pro-max-titan-blue-3.jpg"]', 1)
insert into Images values(54, '["iphone-15-pro-max-titan-natural.jpg", "iphone-15-pro-max-titan-natural-1.jpg", "iphone-15-pro-max-titan-natural-2.jpg", "iphone-15-pro-max-titan-natural-3.jpg"]', 1)

insert into Images values(55, '["iphone-15-pro-max-titan-black.jpg", "iphone-15-pro-max-titan-black-1.jpg", "iphone-15-pro-max-titan-black-2.jpg", "iphone-15-pro-max-titan-black-3.jpg"]', 1)
insert into Images values(56, '["iphone-15-pro-max-titan-white.jpg", "iphone-15-pro-max-titan-white-1.jpg", "iphone-15-pro-max-titan-white-2.jpg", "iphone-15-pro-max-titan-white-3.jpg"]', 1)
insert into Images values(57, '["iphone-15-pro-max-titan-blue.jpg", "iphone-15-pro-max-titan-blue-1.jpg", "iphone-15-pro-max-titan-blue-2.jpg", "iphone-15-pro-max-titan-blue-3.jpg"]', 1)
insert into Images values(58, '["iphone-15-pro-max-titan-natural.jpg", "iphone-15-pro-max-titan-natural-1.jpg", "iphone-15-pro-max-titan-natural-2.jpg", "iphone-15-pro-max-titan-natural-3.jpg"]', 1)
--Image IPHONE 14
insert into Images values(59, '["iphone-14-black.jpg", "iphone-14-black-1.jpg", "iphone-14-black-2.jpg", "iphone-14-black-3.jpg"]', 1)
insert into Images values(60, '["iphone-14-purple.jpg", "iphone-14-purple-1.jpg", "iphone-14-purple-2.jpg", "iphone-14-purple-3.jpg"]', 1)
insert into Images values(61, '["iphone-14-yellow.jpg", "iphone-14-yellow-1.jpg", "iphone-14-yellow-2.jpg", "iphone-14-yellow-3.jpg"]', 1)
insert into Images values(62, '["iphone-14-blue.jpg", "iphone-14-blue-1.jpg", "iphone-14-blue-2.jpg", "iphone-14-blue-3.jpg"]', 1)
insert into Images values(63, '["iphone-14-white.jpg", "iphone-14-white-1.jpg", "iphone-14-white-2.jpg", "iphone-14-white-3.jpg"]', 1)
insert into Images values(64, '["iphone-14-black.jpg", "iphone-14-black-1.jpg", "iphone-14-black-2.jpg", "iphone-14-black-3.jpg"]', 1)
insert into Images values(65, '["iphone-14-purple.jpg", "iphone-14-purple-1.jpg", "iphone-14-purple-2.jpg", "iphone-14-purple-3.jpg"]', 1)
insert into Images values(66, '["iphone-14-yellow.jpg", "iphone-14-yellow-1.jpg", "iphone-14-yellow-2.jpg", "iphone-14-yellow-3.jpg"]', 1)
insert into Images values(67, '["iphone-14-blue.jpg", "iphone-14-blue-1.jpg", "iphone-14-blue-2.jpg", "iphone-14-blue-3.jpg"]', 1)
insert into Images values(68, '["iphone-14-white.jpg", "iphone-14-white-1.jpg", "iphone-14-white-2.jpg", "iphone-14-white-3.jpg"]', 1)
insert into Images values(69, '["iphone-14-black.jpg", "iphone-14-black-1.jpg", "iphone-14-black-2.jpg", "iphone-14-black-3.jpg"]', 1)
insert into Images values(70, '["iphone-14-purple.jpg", "iphone-14-purple-1.jpg", "iphone-14-purple-2.jpg", "iphone-14-purple-3.jpg"]', 1)
insert into Images values(71, '["iphone-14-yellow.jpg", "iphone-14-yellow-1.jpg", "iphone-14-yellow-2.jpg", "iphone-14-yellow-3.jpg"]', 1)
insert into Images values(72, '["iphone-14-blue.jpg", "iphone-14-blue-1.jpg", "iphone-14-blue-2.jpg", "iphone-14-blue-3.jpg"]', 1)
insert into Images values(73, '["iphone-14-white.jpg", "iphone-14-white-1.jpg", "iphone-14-white-2.jpg", "iphone-14-white-3.jpg"]', 1)
--Image IPHONE 14 Plus
insert into Images values(74, '["iphone-14-plus-black.jpg", "iphone-14-plus-black-1.jpg", "iphone-14-plus-black-2.jpg", "iphone-14-plus-black-3.jpg"]', 1)
insert into Images values(75, '["iphone-14-plus-purple.jpg", "iphone-14-plus-purple-1.jpg", "iphone-14-plus-purple-2.jpg", "iphone-14-plus-purple-3.jpg"]', 1)
insert into Images values(76, '["iphone-14-plus-blue.jpg", "iphone-14-plus-blue-1.jpg", "iphone-14-plus-blue-2.jpg", "iphone-14-plus-blue-3.jpg"]', 1)
insert into Images values(77, '["iphone-14-plus-white.jpg", "iphone-14-plus-white-1.jpg", "iphone-14-plus-white-2.jpg", "iphone-14-plus-white-3.jpg"]', 1)
insert into Images values(78, '["iphone-14-plus-yellow.jpg", "iphone-14-plus-yellow-1.jpg", "iphone-14-plus-yellow-2.jpg", "iphone-14-plus-yellow-3.jpg"]', 1)
insert into Images values(79, '["iphone-14-plus-black.jpg", "iphone-14-plus-black-1.jpg", "iphone-14-plus-black-2.jpg", "iphone-14-plus-black-3.jpg"]', 1)
insert into Images values(80, '["iphone-14-plus-purple.jpg", "iphone-14-plus-purple-1.jpg", "iphone-14-plus-purple-2.jpg", "iphone-14-plus-purple-3.jpg"]', 1)
insert into Images values(81, '["iphone-14-plus-blue.jpg", "iphone-14-plus-blue-1.jpg", "iphone-14-plus-blue-2.jpg", "iphone-14-plus-blue-3.jpg"]', 1)
insert into Images values(82, '["iphone-14-plus-white.jpg", "iphone-14-plus-white-1.jpg", "iphone-14-plus-white-2.jpg", "iphone-14-plus-white-3.jpg"]', 1)
insert into Images values(83, '["iphone-14-plus-yellow.jpg", "iphone-14-plus-yellow-1.jpg", "iphone-14-plus-yellow-2.jpg", "iphone-14-plus-yellow-3.jpg"]', 1)
insert into Images values(84, '["iphone-14-plus-black.jpg", "iphone-14-plus-black-1.jpg", "iphone-14-plus-black-2.jpg", "iphone-14-plus-black-3.jpg"]', 1)
insert into Images values(85, '["iphone-14-plus-purple.jpg", "iphone-14-plus-purple-1.jpg", "iphone-14-plus-purple-2.jpg", "iphone-14-plus-purple-3.jpg"]', 1)
insert into Images values(86, '["iphone-14-plus-blue.jpg", "iphone-14-plus-blue-1.jpg", "iphone-14-plus-blue-2.jpg", "iphone-14-plus-blue-3.jpg"]', 1)
insert into Images values(87, '["iphone-14-plus-white.jpg", "iphone-14-plus-white-1.jpg", "iphone-14-plus-white-2.jpg", "iphone-14-plus-white-3.jpg"]', 1)
insert into Images values(88, '["iphone-14-plus-yellow.jpg", "iphone-14-plus-yellow-1.jpg", "iphone-14-plus-yellow-2.jpg", "iphone-14-plus-yellow-3.jpg"]', 1)

--Image IPHONE 14 Pro
insert into Images values(89, '["iphone-14-pro-black.jpg", "iphone-14-pro-black-1.jpg", "iphone-14-pro-black-2.jpg", "iphone-14-pro-black-3.jpg"]', 1)
insert into Images values(90, '["iphone-14-pro-purple.jpg", "iphone-14-pro-purple-1.jpg", "iphone-14-pro-purple-2.jpg", "iphone-14-pro-purple-3.jpg"]', 1)
insert into Images values(91, '["iphone-14-pro-sliver.jpg","iphone-14-pro-sliver-1.jpg", "iphone-14-pro-sliver-2.jpg", "iphone-14-pro-sliver-3.jpg"]', 1)
insert into Images values(92, '["iphone-14-pro-gold.jpg","iphone-14-pro-gold-1.jpg", "iphone-14-pro-gold-2.jpg", "iphone-14-pro-gold-3.jpg"]', 1)
insert into Images values(93, '["iphone-14-pro-black.jpg", "iphone-14-pro-black-1.jpg", "iphone-14-pro-black-2.jpg", "iphone-14-pro-black-3.jpg"]', 1)
insert into Images values(94, '["iphone-14-pro-purple.jpg", "iphone-14-pro-purple-1.jpg", "iphone-14-pro-purple-2.jpg", "iphone-14-pro-purple-3.jpg"]', 1)
insert into Images values(95, '["iphone-14-pro-sliver.jpg","iphone-14-pro-sliver-1.jpg", "iphone-14-pro-sliver-2.jpg", "iphone-14-pro-sliver-3.jpg"]', 1)
insert into Images values(96, '["iphone-14-pro-gold.jpg","iphone-14-pro-gold-1.jpg", "iphone-14-pro-gold-2.jpg", "iphone-14-pro-gold-3.jpg"]', 1)
insert into Images values(97, '["iphone-14-pro-black.jpg", "iphone-14-pro-black-1.jpg", "iphone-14-pro-black-2.jpg", "iphone-14-pro-black-3.jpg"]', 1)
insert into Images values(98, '["iphone-14-pro-purple.jpg", "iphone-14-pro-purple-1.jpg", "iphone-14-pro-purple-2.jpg", "iphone-14-pro-purple-3.jpg"]', 1)
insert into Images values(99, '["iphone-14-pro-sliver.jpg","iphone-14-pro-sliver-1.jpg", "iphone-14-pro-sliver-2.jpg", "iphone-14-pro-sliver-3.jpg"]', 1)
insert into Images values(100, '["iphone-14-pro-gold.jpg","iphone-14-pro-gold-1.jpg", "iphone-14-pro-gold-2.jpg", "iphone-14-pro-gold-3.jpg"]', 1)
insert into Images values(101, '["iphone-14-pro-black.jpg", "iphone-14-pro-black-1.jpg", "iphone-14-pro-black-2.jpg", "iphone-14-pro-black-3.jpg"]', 1)
insert into Images values(102, '["iphone-14-pro-purple.jpg", "iphone-14-pro-purple-1.jpg", "iphone-14-pro-purple-2.jpg", "iphone-14-pro-purple-3.jpg"]', 1)
insert into Images values(103, '["iphone-14-pro-sliver.jpg","iphone-14-pro-sliver-1.jpg", "iphone-14-pro-sliver-2.jpg", "iphone-14-pro-sliver-3.jpg"]', 1)
insert into Images values(104, '["iphone-14-pro-gold.jpg","iphone-14-pro-gold-1.jpg", "iphone-14-pro-gold-2.jpg", "iphone-14-pro-gold-3.jpg"]', 1)
--Image IPHONE 14 Pro max
insert into Images values(105, '["iphone-14-pro-max-black.jpg", "iphone-14-pro-max-black-1.jpg", "iphone-14-pro-max-black-2.jpg", "iphone-14-pro-max-black-3.jpg"]', 1)
insert into Images values(106, '["iphone-14-pro-max-purple.jpg", "iphone-14-pro-max-purple-1.jpg", "iphone-14-pro-max-purple-2.jpg", "iphone-14-pro-max-purple-3.jpg"]', 1)
insert into Images values(107, '["iphone-14-pro-max-sliver.jpg","iphone-14-pro-max-sliver-1.jpg", "iphone-14-pro-max-sliver-2.jpg", "iphone-14-pro-max-sliver-3.jpg"]', 1)
insert into Images values(108, '["iphone-14-pro-max-gold.jpg","iphone-14-pro-max-gold-1.jpg", "iphone-14-pro-max-gold-2.jpg", "iphone-14-pro-max-gold-3.jpg"]', 1)
insert into Images values(109, '["iphone-14-pro-max-black.jpg", "iphone-14-pro-max-black-1.jpg", "iphone-14-pro-max-black-2.jpg", "iphone-14-pro-max-black-3.jpg"]', 1)
insert into Images values(110, '["iphone-14-pro-max-purple.jpg", "iphone-14-pro-max-purple-1.jpg", "iphone-14-pro-max-purple-2.jpg", "iphone-14-pro-max-purple-3.jpg"]', 1)
insert into Images values(111, '["iphone-14-pro-max-sliver.jpg","iphone-14-pro-max-sliver-1.jpg", "iphone-14-pro-max-sliver-2.jpg", "iphone-14-pro-max-sliver-3.jpg"]', 1)
insert into Images values(112, '["iphone-14-pro-max-gold.jpg","iphone-14-pro-max-gold-1.jpg", "iphone-14-pro-max-gold-2.jpg", "iphone-14-pro-max-gold-3.jpg"]', 1)
insert into Images values(113, '["iphone-14-pro-max-black.jpg", "iphone-14-pro-max-black-1.jpg", "iphone-14-pro-max-black-2.jpg", "iphone-14-pro-max-black-3.jpg"]', 1)
insert into Images values(114, '["iphone-14-pro-max-purple.jpg", "iphone-14-pro-max-purple-1.jpg", "iphone-14-pro-max-purple-2.jpg", "iphone-14-pro-max-purple-3.jpg"]', 1)
insert into Images values(115, '["iphone-14-pro-max-sliver.jpg","iphone-14-pro-max-sliver-1.jpg", "iphone-14-pro-max-sliver-2.jpg", "iphone-14-pro-max-sliver-3.jpg"]', 1)
insert into Images values(116, '["iphone-14-pro-max-gold.jpg","iphone-14-pro-max-gold-1.jpg", "iphone-14-pro-max-gold-2.jpg", "iphone-14-pro-max-gold-3.jpg"]', 1)
insert into Images values(117, '["iphone-14-pro-max-black.jpg", "iphone-14-pro-max-black-1.jpg", "iphone-14-pro-max-black-2.jpg", "iphone-14-pro-max-black-3.jpg"]', 1)
insert into Images values(118, '["iphone-14-pro-max-purple.jpg", "iphone-14-pro-max-purple-1.jpg", "iphone-14-pro-max-purple-2.jpg", "iphone-14-pro-max-purple-3.jpg"]', 1)
insert into Images values(119, '["iphone-14-pro-max-sliver.jpg","iphone-14-pro-max-sliver-1.jpg", "iphone-14-pro-max-sliver-2.jpg", "iphone-14-pro-max-sliver-3.jpg"]', 1)
insert into Images values(120, '["iphone-14-pro-max-gold.jpg","iphone-14-pro-max-gold-1.jpg", "iphone-14-pro-max-gold-2.jpg", "iphone-14-pro-max-gold-3.jpg"]', 1)

--image iphone 13
insert into Images values(121, '["iphone-13-hong.jpg","iphone-13-hong-1.jpg", "iphone-13-hong-2.jpg", "iphone-13-hong-3.jpg"]', 1)
insert into Images values(122, '["iphone-13-trang.jpg","iphone-13-trang-1.jpg", "iphone-13-trang-2.jpg", "iphone-13-trang-3.jpg"]', 1)
insert into Images values(123, '["iphone-13-xanh-la.jpg","iphone-13-xanh-la-1.jpg", "iphone-13-xanh-la-2.jpg", "iphone-13-xanh-la-3.jpg"]', 1)
insert into Images values(124, '["iphone-13-blue.jpg","iphone-13-blue-1.jpg", "iphone-13-blue-2.jpg", "iphone-13-blue-3.jpg"]', 1)
insert into Images values(125, '["iphone-13-black.jpg","iphone-13-black-1.jpg", "iphone-13-black-2.jpg", "iphone-13-black-3.jpg"]', 1 )
insert into Images values(126, '["iphone-13-hong.jpg","iphone-13-hong-1.jpg", "iphone-13-hong-2.jpg", "iphone-13-hong-3.jpg"]', 1)
insert into Images values(127, '["iphone-13-trang.jpg","iphone-13-trang-1.jpg", "iphone-13-trang-2.jpg", "iphone-13-trang-3.jpg"]', 1)
insert into Images values(128, '["iphone-13-xanh-la.jpg","iphone-13-xanh-la-1.jpg", "iphone-13-xanh-la-2.jpg", "iphone-13-xanh-la-3.jpg"]', 1)
insert into Images values(129, '["iphone-13-blue.jpg","iphone-13-blue-1.jpg", "iphone-13-blue-2.jpg", "iphone-13-blue-3.jpg"]', 1)
insert into Images values(130, '["iphone-13-black.jpg","iphone-13-black-1.jpg", "iphone-13-black-2.jpg", "iphone-13-black-3.jpg"]', 1 )
insert into Images values(131, '["iphone-13-hong.jpg","iphone-13-hong-1.jpg", "iphone-13-hong-2.jpg", "iphone-13-hong-3.jpg"]', 1)
insert into Images values(132, '["iphone-13-trang.jpg","iphone-13-trang-1.jpg", "iphone-13-trang-2.jpg", "iphone-13-trang-3.jpg"]', 1)
insert into Images values(133, '["iphone-13-xanh-la.jpg","iphone-13-xanh-la-1.jpg", "iphone-13-xanh-la-2.jpg", "iphone-13-xanh-la-3.jpg"]', 1)
insert into Images values(134, '["iphone-13-blue.jpg","iphone-13-blue-1.jpg", "iphone-13-blue-2.jpg", "iphone-13-blue-3.jpg"]', 1)
insert into Images values(135, '["iphone-13-black.jpg","iphone-13-black-1.jpg", "iphone-13-black-2.jpg", "iphone-13-black-3.jpg"]', 1 )
--image iphone 13 pro
insert into Images values(136, '["iphone-13-pro-bac.jpg","iphone-13-pro-bac-1.jpg", "iphone-13-pro-bac-2.jpg", "iphone-13-pro-bac-3.jpg"]', 1)
insert into Images values(137, '["iphone-13-pro-xanh-la.jpg","iphone-13-pro-xanh-la-1.jpg", "iphone-13-pro-xanh-la-2.jpg", "iphone-13-pro-xanh-la-3.jpg"]', 1)
insert into Images values(138, '["iphone-13-pro-xam.jpg","iphone-13-pro-xam-1.jpg", "iphone-13-pro-xam-2.jpg", "iphone-13-pro-xam-3.jpg"]', 1)
insert into Images values(139,'["iphone-13-pro-gold.jpg","iphone-13-pro-gold-1.jpg", "iphone-13-pro-gold-2.jpg", "iphone-13-pro-gold-3.jpg"]', 1)
insert into Images values(140,'["iphone-13-pro-blue.jpg","iphone-13-pro-blue-1.jpg", "iphone-13-pro-blue-2.jpg", "iphone-13-pro-blue-3.jpg"]', 1)
insert into Images values(141, '["iphone-13-pro-bac.jpg","iphone-13-pro-bac-1.jpg", "iphone-13-pro-bac-2.jpg", "iphone-13-pro-bac-3.jpg"]', 1)
insert into Images values(142, '["iphone-13-pro-xanh-la.jpg","iphone-13-pro-xanh-la-1.jpg", "iphone-13-pro-xanh-la-2.jpg", "iphone-13-pro-xanh-la-3.jpg"]', 1)
insert into Images values(143, '["iphone-13-pro-xam.jpg","iphone-13-pro-xam-1.jpg", "iphone-13-pro-xam-2.jpg", "iphone-13-pro-xam-3.jpg"]', 1)
insert into Images values(144,'["iphone-13-pro-gold.jpg","iphone-13-pro-gold-1.jpg", "iphone-13-pro-gold-2.jpg", "iphone-13-pro-gold-3.jpg"]', 1)
insert into Images values(145,'["iphone-13-pro-blue.jpg","iphone-13-pro-blue-1.jpg", "iphone-13-pro-blue-2.jpg", "iphone-13-pro-blue-3.jpg"]', 1)
insert into Images values(146, '["iphone-13-pro-bac.jpg","iphone-13-pro-bac-1.jpg", "iphone-13-pro-bac-2.jpg", "iphone-13-pro-bac-3.jpg"]', 1)
insert into Images values(147, '["iphone-13-pro-xanh-la.jpg","iphone-13-pro-xanh-la-1.jpg", "iphone-13-pro-xanh-la-2.jpg", "iphone-13-pro-xanh-la-3.jpg"]', 1)
insert into Images values(148, '["iphone-13-pro-xam.jpg","iphone-13-pro-xam-1.jpg", "iphone-13-pro-xam-2.jpg", "iphone-13-pro-xam-3.jpg"]', 1)
insert into Images values(149,'["iphone-13-pro-gold.jpg","iphone-13-pro-gold-1.jpg", "iphone-13-pro-gold-2.jpg", "iphone-13-pro-gold-3.jpg"]', 1)
insert into Images values(150,'["iphone-13-pro-blue.jpg","iphone-13-pro-blue-1.jpg", "iphone-13-pro-blue-2.jpg", "iphone-13-pro-blue-3.jpg"]', 1)
insert into Images values(151, '["iphone-13-pro-bac.jpg","iphone-13-pro-bac-1.jpg", "iphone-13-pro-bac-2.jpg", "iphone-13-pro-bac-3.jpg"]', 1)
insert into Images values(152, '["iphone-13-pro-xanh-la.jpg","iphone-13-pro-xanh-la-1.jpg", "iphone-13-pro-xanh-la-2.jpg", "iphone-13-pro-xanh-la-3.jpg"]', 1)
insert into Images values(153, '["iphone-13-pro-xam.jpg","iphone-13-pro-xam-1.jpg", "iphone-13-pro-xam-2.jpg", "iphone-13-pro-xam-3.jpg"]', 1)
insert into Images values(154,'["iphone-13-pro-gold.jpg","iphone-13-pro-gold-1.jpg", "iphone-13-pro-gold-2.jpg", "iphone-13-pro-gold-3.jpg"]', 1)
insert into Images values(155,'["iphone-13-pro-blue.jpg","iphone-13-pro-blue-1.jpg", "iphone-13-pro-blue-2.jpg", "iphone-13-pro-blue-3.jpg"]', 1)
--image iphone 13 pro max
insert into Images values(156, '["iphone-13-pro-max-bac.jpg","iphone-13-pro-max-bac-1.jpg", "iphone-13-pro-max-bac-2.jpg", "iphone-13-pro-max-bac-3.jpg"]', 1)
insert into Images values(157, '["iphone-13-pro-max-xanh-la.jpg","iphone-13-pro-max-xanh-la-1.jpg", "iphone-13-pro-max-xanh-la-2.jpg", "iphone-13-pro-max-xanh-la-3.jpg"]', 1)
insert into Images values(158, '["iphone-13-pro-max-xam.jpg","iphone-13-pro-max-xam-1.jpg", "iphone-13-pro-max-xam-2.jpg", "iphone-13-pro-max-xam-3.jpg"]', 1)
insert into Images values(159,'["iphone-13-pro-max-gold.jpg","iphone-13-pro-max-gold-1.jpg", "iphone-13-pro-max-gold-2.jpg", "iphone-13-pro-max-gold-3.jpg"]', 1)
insert into Images values(160,'["iphone-13-pro-max-blue.jpg","iphone-13-pro-max-blue-1.jpg", "iphone-13-pro-max-blue-2.jpg", "iphone-13-pro-max-blue-3.jpg"]', 1)
insert into Images values(161, '["iphone-13-pro-max-bac.jpg","iphone-13-pro-max-bac-1.jpg", "iphone-13-pro-max-bac-2.jpg", "iphone-13-pro-max-bac-3.jpg"]', 1)
insert into Images values(162, '["iphone-13-pro-max-xanh-la.jpg","iphone-13-pro-max-xanh-la-1.jpg", "iphone-13-pro-max-xanh-la-2.jpg", "iphone-13-pro-max-xanh-la-3.jpg"]', 1)
insert into Images values(163, '["iphone-13-pro-max-xam.jpg","iphone-13-pro-max-xam-1.jpg", "iphone-13-pro-max-xam-2.jpg", "iphone-13-pro-max-xam-3.jpg"]', 1)
insert into Images values(164,'["iphone-13-pro-max-gold.jpg","iphone-13-pro-max-gold-1.jpg", "iphone-13-pro-max-gold-2.jpg", "iphone-13-pro-max-gold-3.jpg"]', 1)
insert into Images values(165,'["iphone-13-pro-max-blue.jpg","iphone-13-pro-max-blue-1.jpg", "iphone-13-pro-max-blue-2.jpg", "iphone-13-pro-max-blue-3.jpg"]', 1)
insert into Images values(166, '["iphone-13-pro-max-bac.jpg","iphone-13-pro-max-bac-1.jpg", "iphone-13-pro-max-bac-2.jpg", "iphone-13-pro-max-bac-3.jpg"]', 1)
insert into Images values(167, '["iphone-13-pro-max-xanh-la.jpg","iphone-13-pro-max-xanh-la-1.jpg", "iphone-13-pro-max-xanh-la-2.jpg", "iphone-13-pro-max-xanh-la-3.jpg"]', 1)
insert into Images values(168, '["iphone-13-pro-max-xam.jpg","iphone-13-pro-max-xam-1.jpg", "iphone-13-pro-max-xam-2.jpg", "iphone-13-pro-max-xam-3.jpg"]', 1)
insert into Images values(169,'["iphone-13-pro-max-gold.jpg","iphone-13-pro-max-gold-1.jpg", "iphone-13-pro-max-gold-2.jpg", "iphone-13-pro-max-gold-3.jpg"]', 1)
insert into Images values(170,'["iphone-13-pro-max-blue.jpg","iphone-13-pro-max-blue-1.jpg", "iphone-13-pro-max-blue-2.jpg", "iphone-13-pro-max-blue-3.jpg"]', 1)
insert into Images values(171, '["iphone-13-pro-max-bac.jpg","iphone-13-pro-max-bac-1.jpg", "iphone-13-pro-max-bac-2.jpg", "iphone-13-pro-max-bac-3.jpg"]', 1)
insert into Images values(172, '["iphone-13-pro-max-xanh-la.jpg","iphone-13-pro-max-xanh-la-1.jpg", "iphone-13-pro-max-xanh-la-2.jpg", "iphone-13-pro-max-xanh-la-3.jpg"]', 1)
insert into Images values(173, '["iphone-13-pro-max-xam.jpg","iphone-13-pro-max-xam-1.jpg", "iphone-13-pro-max-xam-2.jpg", "iphone-13-pro-max-xam-3.jpg"]', 1)
insert into Images values(174,'["iphone-13-pro-max-gold.jpg","iphone-13-pro-max-gold-1.jpg", "iphone-13-pro-max-gold-2.jpg", "iphone-13-pro-max-gold-3.jpg"]', 1)
insert into Images values(175,'["iphone-13-pro-max-blue.jpg","iphone-13-pro-max-blue-1.jpg", "iphone-13-pro-max-blue-2.jpg", "iphone-13-pro-max-blue-3.jpg"]', 1)
-- IMAGE IPHONE 12
insert into Images values(176, '["iphone-12-den.jpg","iphone-12-den-1.jpg", "iphone-12-den-2.jpg", "iphone-12-den-3.jpg"]', 1)
insert into Images values(177, '["iphone-12-trang.jpg","iphone-12-trang-1.jpg", "iphone-12-trang-2.jpg", "iphone-12-trang-3.jpg"]', 1)
insert into Images values(178, '["iphone-12-xanh.jpg","iphone-12-xanh-1.jpg", "iphone-12-xanh-2.jpg", "iphone-12-xanh-3.jpg"]', 1)
insert into Images values(179, '["iphone-12-tim.jpg","iphone-12-tim-1.jpg", "iphone-12-tim-2.jpg", "iphone-12-tim-3.jpg"]', 1)
insert into Images values(180, '["iphone-12-xanh-duong.jpg","iphone-12-xanh-duong-1.jpg", "iphone-12-xanh-duong-2.jpg", "iphone-12-xanh-duong-3.jpg"]', 1)
insert into Images values(181, '["iphone-12-do.jpg","iphone-12-do-1.jpg", "iphone-12-do-2.jpg", "iphone-12-do-3.jpg"]', 1 )
insert into Images values(182, '["iphone-12-den.jpg","iphone-12-den-1.jpg", "iphone-12-den-2.jpg", "iphone-12-den-3.jpg"]', 1)
insert into Images values(183, '["iphone-12-trang.jpg","iphone-12-trang-1.jpg", "iphone-12-trang-2.jpg", "iphone-12-trang-3.jpg"]', 1)
insert into Images values(184, '["iphone-12-xanh.jpg","iphone-12-xanh-1.jpg", "iphone-12-xanh-2.jpg", "iphone-12-xanh-3.jpg"]', 1)
insert into Images values(185, '["iphone-12-tim.jpg","iphone-12-tim-1.jpg", "iphone-12-tim-2.jpg", "iphone-12-tim-3.jpg"]', 1)
insert into Images values(186, '["iphone-12-xanh-duong.jpg","iphone-12-xanh-duong-1.jpg", "iphone-12-xanh-duong-2.jpg", "iphone-12-xanh-duong-3.jpg"]', 1)
insert into Images values(187, '["iphone-12-do.jpg","iphone-12-do-1.jpg", "iphone-12-do-2.jpg", "iphone-12-do-3.jpg"]', 1 )
insert into Images values(188, '["iphone-12-den.jpg","iphone-12-den-1.jpg", "iphone-12-den-2.jpg", "iphone-12-den-3.jpg"]', 1)
insert into Images values(189, '["iphone-12-trang.jpg","iphone-12-trang-1.jpg", "iphone-12-trang-2.jpg", "iphone-12-trang-3.jpg"]', 1)
insert into Images values(190, '["iphone-12-xanh.jpg","iphone-12-xanh-1.jpg", "iphone-12-xanh-2.jpg", "iphone-12-xanh-3.jpg"]', 1)
insert into Images values(191, '["iphone-12-tim.jpg","iphone-12-tim-1.jpg", "iphone-12-tim-2.jpg", "iphone-12-tim-3.jpg"]', 1)
insert into Images values(192, '["iphone-12-xanh-duong.jpg","iphone-12-xanh-duong-1.jpg", "iphone-12-xanh-duong-2.jpg", "iphone-12-xanh-duong-3.jpg"]', 1)
insert into Images values(193, '["iphone-12-do.jpg","iphone-12-do-1.jpg", "iphone-12-do-2.jpg", "iphone-12-do-3.jpg"]', 1 )

--IMAGE IPHONE 12 PRO
insert into Images values(194, '["iphone-12-pro-gold.jpg","iphone-12-pro-gold-1.jpg", "iphone-12-pro-gold-2.jpg", "iphone-12-pro-gold-3.jpg"]', 1)
insert into Images values(195, '["iphone-12-pro-bac.jpg","iphone-12-pro-bac-1.jpg", "iphone-12-pro-bac-2.jpg", "iphone-12-pro-bac-3.jpg"]', 1)
insert into Images values(196, '["iphone-12-pro-xam.jpg","iphone-12-pro-xam-1.jpg", "iphone-12-pro-xam-2.jpg", "iphone-12-pro-xam-3.jpg"]', 1)
insert into Images values(197, '["iphone-12-pro-xanh-duong.jpg","iphone-12-pro-xanh-duong-1.jpg", "iphone-12-pro-xanh-duong-2.jpg", "iphone-12-pro-xanh-duong-3.jpg"]', 1)
insert into Images values(198, '["iphone-12-pro-gold.jpg","iphone-12-pro-gold-1.jpg", "iphone-12-pro-gold-2.jpg", "iphone-12-pro-gold-3.jpg"]', 1)
insert into Images values(199, '["iphone-12-pro-bac.jpg","iphone-12-pro-bac-1.jpg", "iphone-12-pro-bac-2.jpg", "iphone-12-pro-bac-3.jpg"]', 1)
insert into Images values(200, '["iphone-12-pro-xam.jpg","iphone-12-pro-xam-1.jpg", "iphone-12-pro-xam-2.jpg", "iphone-12-pro-xam-3.jpg"]', 1)
insert into Images values(201, '["iphone-12-pro-xanh-duong.jpg","iphone-12-pro-xanh-duong-1.jpg", "iphone-12-pro-xanh-duong-2.jpg", "iphone-12-pro-xanh-duong-3.jpg"]', 1)
insert into Images values(202, '["iphone-12-pro-gold.jpg","iphone-12-pro-gold-1.jpg", "iphone-12-pro-gold-2.jpg", "iphone-12-pro-gold-3.jpg"]', 1)
insert into Images values(203, '["iphone-12-pro-bac.jpg","iphone-12-pro-bac-1.jpg", "iphone-12-pro-bac-2.jpg", "iphone-12-pro-bac-3.jpg"]', 1)
insert into Images values(204, '["iphone-12-pro-xam.jpg","iphone-12-pro-xam-1.jpg", "iphone-12-pro-xam-2.jpg", "iphone-12-pro-xam-3.jpg"]', 1)
insert into Images values(205, '["iphone-12-pro-xanh-duong.jpg","iphone-12-pro-xanh-duong-1.jpg", "iphone-12-pro-xanh-duong-2.jpg", "iphone-12-pro-xanh-duong-3.jpg"]', 1)

-- IMAGE IPHONE 12 PRO MAX
insert into Images values(206, '["iphone-12-pro-max-gold.jpg","iphone-12-pro-max-gold-1.jpg", "iphone-12-pro-max-gold-2.jpg", "iphone-12-pro-max-gold-3.jpg"]', 1)
insert into Images values(207, '["iphone-12-pro-max-bac.jpg","iphone-12-pro-max-bac-1.jpg", "iphone-12-pro-max-bac-2.jpg", "iphone-12-pro-max-bac-3.jpg"]', 1)
insert into Images values(208, '["iphone-12-pro-max-xam.jpg","iphone-12-pro-max-xam-1.jpg", "iphone-12-pro-max-xam-2.jpg", "iphone-12-pro-max-xam-3.jpg"]', 1)
insert into Images values(209, '["iphone-12-pro-max-xanh-duong.jpg","iphone-12-pro-max-xanh-duong-1.jpg", "iphone-12-pro-max-xanh-duong-2.jpg", "iphone-12-pro-max-xanh-duong-3.jpg"]', 1)
insert into Images values(210, '["iphone-12-pro-max-gold.jpg","iphone-12-pro-max-gold-1.jpg", "iphone-12-pro-max-gold-2.jpg", "iphone-12-pro-max-gold-3.jpg"]', 1)
insert into Images values(211, '["iphone-12-pro-max-bac.jpg","iphone-12-pro-max-bac-1.jpg", "iphone-12-pro-max-bac-2.jpg", "iphone-12-pro-max-bac-3.jpg"]', 1)
insert into Images values(212, '["iphone-12-pro-max-xam.jpg","iphone-12-pro-max-xam-1.jpg", "iphone-12-pro-max-xam-2.jpg", "iphone-12-pro-max-xam-3.jpg"]', 1)
insert into Images values(213, '["iphone-12-pro-max-xanh-duong.jpg","iphone-12-pro-max-xanh-duong-1.jpg", "iphone-12-pro-max-xanh-duong-2.jpg", "iphone-12-pro-max-xanh-duong-3.jpg"]', 1)
insert into Images values(214, '["iphone-12-pro-max-gold.jpg","iphone-12-pro-max-gold-1.jpg", "iphone-12-pro-max-gold-2.jpg", "iphone-12-pro-max-gold-3.jpg"]', 1)
insert into Images values(215, '["iphone-12-pro-max-bac.jpg","iphone-12-pro-max-bac-1.jpg", "iphone-12-pro-max-bac-2.jpg", "iphone-12-pro-max-bac-3.jpg"]', 1)
insert into Images values(216, '["iphone-12-pro-max-xam.jpg","iphone-12-pro-max-xam-1.jpg", "iphone-12-pro-max-xam-2.jpg", "iphone-12-pro-max-xam-3.jpg"]', 1)
insert into Images values(217, '["iphone-12-pro-max-xanh-duong.jpg","iphone-12-pro-max-xanh-duong-1.jpg", "iphone-12-pro-max-xanh-duong-2.jpg", "iphone-12-pro-max-xanh-duong-3.jpg"]', 1)
-- IMAGE IPHONE 11
insert into Images values(218,'["iphone-11-black.jpg","iphone-11-black-1.jpg", "iphone-11-black-2.jpg", "iphone-11-black-3.jpg"]', 1)
insert into Images values(219, '["iphone-11-white.jpg","iphone-11-white-1.jpg", "iphone-11-white-2.jpg", "iphone-11-white-3.jpg"]', 1)
insert into Images values(220, '["iphone-11-green.jpg","iphone-11-green-1.jpg", "iphone-11-green-2.jpg", "iphone-11-green-3.jpg"]', 1)
insert into Images values(221, '["iphone-11-purple.jpg","iphone-11-purple-1.jpg", "iphone-11-purple-2.jpg", "iphone-11-purple-3.jpg"]', 1)
insert into Images values(222, '["iphone-11-yellow.jpg","iphone-11-yellow-1.jpg", "iphone-11-yellow-2.jpg", "iphone-11-yellow-3.jpg"]', 1)
insert into Images values(223, '["iphone-11-red.jpg","iphone-11-red-1.jpg", "iphone-11-red-2.jpg", "iphone-11-red-3.jpg"]', 1 )
insert into Images values(224,'["iphone-11-black.jpg","iphone-11-black-1.jpg", "iphone-11-black-2.jpg", "iphone-11-black-3.jpg"]', 1)
insert into Images values(225, '["iphone-11-white.jpg","iphone-11-white-1.jpg", "iphone-11-white-2.jpg", "iphone-11-white-3.jpg"]', 1)
insert into Images values(226, '["iphone-11-green.jpg","iphone-11-green-1.jpg", "iphone-11-green-2.jpg", "iphone-11-green-3.jpg"]', 1)
insert into Images values(227, '["iphone-11-purple.jpg","iphone-11-purple-1.jpg", "iphone-11-purple-2.jpg", "iphone-11-purple-3.jpg"]', 1)
insert into Images values(228, '["iphone-11-yellow.jpg","iphone-11-yellow-1.jpg", "iphone-11-yellow-2.jpg", "iphone-11-yellow-3.jpg"]', 1)
insert into Images values(229, '["iphone-11-red.jpg","iphone-11-red-1.jpg", "iphone-11-red-2.jpg", "iphone-11-red-3.jpg"]', 1 )
insert into Images values(230,'["iphone-11-black.jpg","iphone-11-black-1.jpg", "iphone-11-black-2.jpg", "iphone-11-black-3.jpg"]', 1)
insert into Images values(231, '["iphone-11-white.jpg","iphone-11-white-1.jpg", "iphone-11-white-2.jpg", "iphone-11-white-3.jpg"]', 1)
insert into Images values(232, '["iphone-11-green.jpg","iphone-11-green-1.jpg", "iphone-11-green-2.jpg", "iphone-11-green-3.jpg"]', 1)
insert into Images values(233, '["iphone-11-purple.jpg","iphone-11-purple-1.jpg", "iphone-11-purple-2.jpg", "iphone-11-purple-3.jpg"]', 1)
insert into Images values(234, '["iphone-11-yellow.jpg","iphone-11-yellow-1.jpg", "iphone-11-yellow-2.jpg", "iphone-11-yellow-3.jpg"]', 1)
insert into Images values(235, '["iphone-11-red.jpg","iphone-11-red-1.jpg", "iphone-11-red-2.jpg", "iphone-11-red-3.jpg"]', 1 )

-- IMAGE IPHONE 11 PRO
insert into Images values(236,'["iphone-11-pro-gold.jpg","iphone-11-pro-gold-1.jpg", "iphone-11-pro-gold-2.jpg", "iphone-11-pro-gold-3.jpg"]', 1)
insert into Images values(237,'["iphone-11-pro-gray.jpg","iphone-11-pro-gray-1.jpg", "iphone-11-pro-gray-2.jpg", "iphone-11-pro-gray-3.jpg"]', 1)
insert into Images values(238,'["iphone-11-pro-green.jpg","iphone-11-pro-green-1.jpg", "iphone-11-pro-green-2.jpg", "iphone-11-pro-green-3.jpg"]', 1)
insert into Images values(239,'["iphone-11-pro-gold.jpg","iphone-11-pro-gold-1.jpg", "iphone-11-pro-gold-2.jpg", "iphone-11-pro-gold-3.jpg"]', 1)
insert into Images values(240,'["iphone-11-pro-gray.jpg","iphone-11-pro-gray-1.jpg", "iphone-11-pro-gray-2.jpg", "iphone-11-pro-gray-3.jpg"]', 1)
insert into Images values(241,'["iphone-11-pro-green.jpg","iphone-11-pro-green-1.jpg", "iphone-11-pro-green-2.jpg", "iphone-11-pro-green-3.jpg"]', 1)
insert into Images values(242,'["iphone-11-pro-gold.jpg","iphone-11-pro-gold-1.jpg", "iphone-11-pro-gold-2.jpg", "iphone-11-pro-gold-3.jpg"]', 1)
insert into Images values(243,'["iphone-11-pro-gray.jpg","iphone-11-pro-gray-1.jpg", "iphone-11-pro-gray-2.jpg", "iphone-11-pro-gray-3.jpg"]', 1)
insert into Images values(244,'["iphone-11-pro-green.jpg","iphone-11-pro-green-1.jpg", "iphone-11-pro-green-2.jpg", "iphone-11-pro-green-3.jpg"]', 1)

-- IMAGE IPHONE 11 PRO MAX
insert into Images values(245,'["iphone-11-pro-max-gold.jpg","iphone-11-pro-max-gold-1.jpg", "iphone-11-pro-max-gold-2.jpg", "iphone-11-pro-max-gold-3.jpg"]', 1)
insert into Images values(246,'["iphone-11-pro-max-gray.jpg","iphone-11-pro-max-gray-1.jpg", "iphone-11-pro-max-gray-2.jpg", "iphone-11-pro-max-gray-3.jpg"]', 1)
insert into Images values(247,'["iphone-11-pro-max-green.jpg","iphone-11-pro-max-green-1.jpg", "iphone-11-pro-max-green-2.jpg", "iphone-11-pro-max-green-3.jpg"]', 1)
insert into Images values(248,'["iphone-11-pro-max-gold.jpg","iphone-11-pro-max-gold-1.jpg", "iphone-11-pro-max-gold-2.jpg", "iphone-11-pro-max-gold-3.jpg"]', 1)
insert into Images values(249,'["iphone-11-pro-max-gray.jpg","iphone-11-pro-max-gray-1.jpg", "iphone-11-pro-max-gray-2.jpg", "iphone-11-pro-max-gray-3.jpg"]', 1)
insert into Images values(250,'["iphone-11-pro-max-green.jpg","iphone-11-pro-max-green-1.jpg", "iphone-11-pro-max-green-2.jpg", "iphone-11-pro-max-green-3.jpg"]', 1)
insert into Images values(251,'["iphone-11-pro-max-gold.jpg","iphone-11-pro-max-gold-1.jpg", "iphone-11-pro-max-gold-2.jpg", "iphone-11-pro-max-gold-3.jpg"]', 1)
insert into Images values(252,'["iphone-11-pro-max-gray.jpg","iphone-11-pro-max-gray-1.jpg", "iphone-11-pro-max-gray-2.jpg", "iphone-11-pro-max-gray-3.jpg"]', 1)
insert into Images values(253,'["iphone-11-pro-max-green.jpg","iphone-11-pro-max-green-1.jpg", "iphone-11-pro-max-green-2.jpg", "iphone-11-pro-max-green-3.jpg"]', 1)

--IMAGE SAMSUNG S24 Ultra
insert into Images values(254,'["samsung-s24ultra-grey-1.jpg","samsung-s24ultra-grey-2.jpg","samsung-s24ultra-grey-3.jpg","samsung-s24ultra-grey-4.jpg"]',1)
insert into Images values(255,'["samsung-s24ultra-black-1.jpg","samsung-s24ultra-black-2.jpg","samsung-s24ultra-black-3.jpg","samsung-s24ultra-black-4.jpg"]',1)
insert into Images values(256,'["samsung-s24ultra-violet-1.jpg","samsung-s24ultra-violet-2.jpg","samsung-s24ultra-violet-3.jpg","samsung-s24ultra-violet-4.jpg"]',1)
insert into Images values(257,'["samsung-s24ultra-gold-1.jpg","samsung-s24ultra-gold-2.jpg","samsung-s24ultra-gold-3.jpg","samsung-s24ultra-gold-4.jpg"]',1)
insert into Images values(258,'["samsung-s24ultra-grey-1.jpg","samsung-s24ultra-grey-2.jpg","samsung-s24ultra-grey-3.jpg","samsung-s24ultra-grey-4.jpg"]',1)
insert into Images values(259,'["samsung-s24ultra-black-1.jpg","samsung-s24ultra-black-2.jpg","samsung-s24ultra-black-3.jpg","samsung-s24ultra-black-4.jpg"]',1)
insert into Images values(260,'["samsung-s24ultra-violet-1.jpg","samsung-s24ultra-violet-2.jpg","samsung-s24ultra-violet-3.jpg","samsung-s24ultra-violet-4.jpg"]',1)
insert into Images values(261,'["samsung-s24ultra-gold-1.jpg","samsung-s24ultra-gold-2.jpg","samsung-s24ultra-gold-3.jpg","samsung-s24ultra-gold-4.jpg"]',1)
insert into Images values(262,'["samsung-s24ultra-grey-1.jpg","samsung-s24ultra-grey-2.jpg","samsung-s24ultra-grey-3.jpg","samsung-s24ultra-grey-4.jpg"]',1)
insert into Images values(263,'["samsung-s24ultra-black-1.jpg","samsung-s24ultra-black-2.jpg","samsung-s24ultra-black-3.jpg","samsung-s24ultra-black-4.jpg"]',1)
insert into Images values(264,'["samsung-s24ultra-violet-1.jpg","samsung-s24ultra-violet-2.jpg","samsung-s24ultra-violet-3.jpg","samsung-s24ultra-violet-4.jpg"]',1)
insert into Images values(265,'["samsung-s24ultra-gold-1.jpg","samsung-s24ultra-gold-2.jpg","samsung-s24ultra-gold-3.jpg","samsung-s24ultra-gold-4.jpg"]',1)
--Image Samsung s24 plus
insert into Images values(266,'["samsung-s24plus-grey-1.jpg","samsung-s24plus-grey-2.jpg","samsung-s24plus-grey-3.jpg","samsung-s24plus-grey-4.jpg"]',1)
insert into Images values(267,'["samsung-s24plus-black-1.jpg","samsung-s24plus-black-2.jpg","samsung-s24plus-black-3.jpg","samsung-s24plus-black-4.jpg"]',1)
insert into Images values(268,'["samsung-s24plus-violet-1.jpg","samsung-s24plus-violet-2.jpg","samsung-s24plus-violet-3.jpg","samsung-s24plus-violet-4.jpg"]',1)
insert into Images values(269,'["samsung-s24plus-gold-1.jpg","samsung-s24plus-gold-2.jpg","samsung-s24plus-gold-3.jpg","samsung-s24plus-gold-4.jpg"]',1)

insert into Images values(270,'["samsung-s24plus-grey-1.jpg","samsung-s24plus-grey-2.jpg","samsung-s24plus-grey-3.jpg","samsung-s24plus-grey-4.jpg"]',1)
insert into Images values(271,'["samsung-s24plus-black-1.jpg","samsung-s24plus-black-2.jpg","samsung-s24plus-black-3.jpg","samsung-s24plus-black-4.jpg"]',1)
insert into Images values(272,'["samsung-s24plus-violet-1.jpg","samsung-s24plus-violet-2.jpg","samsung-s24plus-violet-3.jpg","samsung-s24plus-violet-4.jpg"]',1)
insert into Images values(273,'["samsung-s24plus-gold-1.jpg","samsung-s24plus-gold-2.jpg","samsung-s24plus-gold-3.jpg","samsung-s24plus-gold-4.jpg"]',1)

--Image Samsung s24 plus
insert into Images values(274,'["samsung-s24-grey-1.jpg","samsung-s24-grey-2.jpg","samsung-s24plus-grey-3.jpg","samsung-s24plus-grey-4.jpg"]',1)
insert into Images values(275,'["samsung-s24-black-1.jpg","samsung-s24-black-2.jpg","samsung-s24plus-black-3.jpg","samsung-s24plus-black-4.jpg"]',1)
insert into Images values(276,'["samsung-s24-violet-1.jpg","samsung-s24-violet-2.jpg","samsung-s24plus-violet-3.jpg","samsung-s24plus-violet-4.jpg"]',1)
insert into Images values(277,'["samsung-s24-gold-1.jpg","samsung-s24-gold-2.jpg","samsung-s24plus-gold-3.jpg","samsung-s24plus-gold-4.jpg"]',1)

insert into Images values(278,'["samsung-s24-grey-1.jpg","samsung-s24-grey-2.jpg","samsung-s24-grey-3.jpg","samsung-s24-grey-4.jpg"]',1)
insert into Images values(279,'["samsung-s24-black-1.jpg","samsung-s24-black-2.jpg","samsung-s24-black-3.jpg","samsung-s24-black-4.jpg"]',1)
insert into Images values(280,'["samsung-s24-violet-1.jpg","samsung-s24-violet-2.jpg","samsung-s24-violet-3.jpg","samsung-s24-violet-4.jpg"]',1)
insert into Images values(281,'["samsung-s24-gold-1.jpg","samsung-s24-gold-2.jpg","samsung-s24-gold-3.jpg","samsung-s24-gold-4.jpg"]',1)
--Image Samsung s23 ultra
insert into Images values(282,'["samsung-s23ultra-green-1.jpg","samsung-s23ultra-green-2.jpg","samsung-s23ultra-green-3.jpg","samsung-s23ultra-green-4.jpg"]',1)
insert into Images values(283,'["samsung-s23ultra-purple-1.jpg","samsung-s23ultra-purple-2.jpg","samsung-s23ultra-purple-3.jpg","samsung-s23ultra-purple-4.jpg"]',1)
insert into Images values(284,'["samsung-s23ultra-cream-1.jpg","samsung-s23ultra-cream-2.jpg","samsung-s23ultra-cream-3.jpg","samsung-s23ultra-cream-4.jpg"]',1)
insert into Images values(285,'["samsung-s23ultra-black-1.jpg","samsung-s23ultra-black-2.jpg","samsung-s23ultra-black-3.jpg","samsung-s23ultra-black-4.jpg"]',1)
insert into Images values(286,'["samsung-s23ultra-green-1.jpg","samsung-s23ultra-green-2.jpg","samsung-s23ultra-green-3.jpg","samsung-s23ultra-green-4.jpg"]',1)
insert into Images values(287,'["samsung-s23ultra-purple-1.jpg","samsung-s23ultra-purple-2.jpg","samsung-s23ultra-purple-3.jpg","samsung-s23ultra-purple-4.jpg"]',1)
insert into Images values(288,'["samsung-s23ultra-cream-1.jpg","samsung-s23ultra-cream-2.jpg","samsung-s23ultra-cream-3.jpg","samsung-s23ultra-cream-4.jpg"]',1)
insert into Images values(289,'["samsung-s23ultra-black-1.jpg","samsung-s23ultra-black-2.jpg","samsung-s23ultra-black-3.jpg","samsung-s23ultra-black-4.jpg"]',1)
--image Samsung s23 FE
insert into Images values(290,'["samsung-S23FE-green-1.jpg","samsung-S23FE-green-2.jpg","samsung-S23FE-green-3.jpg","samsung-S23FE-green-4.jpg"]',1)
insert into Images values(291,'["samsung-S23FE-white-1.jpg","samsung-S23FE-white-2.jpg","samsung-S23FE-white-3.jpg","samsung-S23FE-white-4.jpg"]',1)
insert into Images values(292,'["samsung-S23FE-violet-1.jpg","samsung-S23FE-violet-2.jpg","samsung-S23FE-violet-3.jpg","samsung-S23FE-violet-4.jpg"]',1)
insert into Images values(293,'["samsung-S23FE-grey-1.jpg","samsung-S23FE-grey-2.jpg","samsung-S23FE-grey-4.jpg","samsung-S23FE-grey-4.jpg"]',1)
insert into Images values(294,'["samsung-S23FE-green-1.jpg","samsung-S23FE-green-2.jpg","samsung-S23FE-green-3.jpg","samsung-S23FE-green-4.jpg"]',1)
insert into Images values(295,'["samsung-S23FE-white-1.jpg","samsung-S23FE-white-2.jpg","samsung-S23FE-white-3.jpg","samsung-S23FE-white-4.jpg"]',1)
insert into Images values(296,'["samsung-S23FE-violet-1.jpg","samsung-S23FE-violet-2.jpg","samsung-S23FE-violet-3.jpg","samsung-S23FE-violet-4.jpg"]',1)
insert into Images values(297,'["samsung-S23FE-grey-1.jpg","samsung-S23FE-grey-2.jpg","samsung-S23FE-grey-4.jpg","samsung-S23FE-grey-4.jpg"]',1)
--image samsung s23
insert into Images values(298,'["samsung-s23-green-1.jpg","samsung-s23-green-2.jpg","samsung-s23-green-3.jpg","samsung-s23-green-4.jpg"]',1)
insert into Images values(299,'["samsung-s23-white-1.jpg","samsung-s23-white-2.jpg","samsung-s23-white-3.jpg","samsung-s23-white-4.jpg"]',1)
insert into Images values(300,'["samsung-s23-violet-1.jpg","samsung-s23-violet-2.jpg","samsung-s23-violet-3.jpg","samsung-s23-violet-4.jpg"]',1)
insert into Images values(301,'["samsung-s23-black-1.jpg","samsung-s23-black-2.jpg","samsung-s23-black-4.jpg","samsung-s23-black-4.jpg"]',1)
insert into Images values(302,'["samsung-s23-green-1.jpg","samsung-s23-green-2.jpg","samsung-s23-green-3.jpg","samsung-s23-green-4.jpg"]',1)
insert into Images values(303,'["samsung-s23-white-1.jpg","samsung-s23-white-2.jpg","samsung-s23-white-3.jpg","samsung-s23-white-4.jpg"]',1)
insert into Images values(304,'["samsung-s23-violet-1.jpg","samsung-s23-violet-2.jpg","samsung-s23-violet-3.jpg","samsung-s23-violet-4.jpg"]',1)
insert into Images values(305,'["samsung-s23-black-1.jpg","samsung-s23-black-2.jpg","samsung-s23-black-4.jpg","samsung-s23-black-4.jpg"]',1)
--image s22 ultra
insert into Images values(306,'["samsung-s22ultra-black-1.jpg","samsung-s22ultra-black-2.jpg","samsung-s22ultra-black-3.jpg","samsung-s22ultra-black-4.jpg"]',1)
insert into Images values(307,'["samsung-s22ultra-white-1.jpg","samsung-s22ultra-white-2.jpg","samsung-s22ultra-white-3.jpg","samsung-s22ultra-white-4.jpg"]',1)
insert into Images values(308,'["samsung-s22ultra-green-1.jpg","samsung-s22ultra-green-2.jpg","samsung-s22ultra-green-4.jpg","samsung-s22ultra-green-4.jpg"]',1)
--image s22
insert into Images values(309,'["samsung-s22-black-1.jpg","samsung-s22-black-2.jpg","samsung-s22-black-3.jpg","samsung-s22-black-4.jpg"]',1)
--image zfold5
insert into Images values(310,'["samsung-zfold5-cream-1.jpg","samsung-zfold5-cream-2.jpg","samsung-zfold5-cream-3.jpg","samsung-zfold5-cream-4.jpg"]',1)
insert into Images values(311,'["samsung-zfold5-blue-1.jpg","samsung-zfold5-blue-2.jpg","samsung-zfold5-blue-3.jpg","samsung-zfold5-blue-4.jpg"]',1)
insert into Images values(312,'["samsung-zfold5-black-1.jpg","samsung-zfold5-black-2.jpg","samsung-zfold5-black-3.jpg","samsung-zfold5-black-4.jpg"]',1)
insert into Images values(313,'["samsung-zfold5-cream-1.jpg","samsung-zfold5-cream-2.jpg","samsung-zfold5-cream-3.jpg","samsung-zfold5-cream-4.jpg"]',1)
insert into Images values(314,'["samsung-zfold5-blue-1.jpg","samsung-zfold5-blue-2.jpg","samsung-zfold5-blue-3.jpg","samsung-zfold5-blue-4.jpg"]',1)
insert into Images values(315,'["samsung-zfold5-black-1.jpg","samsung-zfold5-black-2.jpg","samsung-zfold5-black-3.jpg","samsung-zfold5-black-4.jpg"]',1)
insert into Images values(316,'["samsung-zfold5-cream-1.jpg","samsung-zfold5-cream-2.jpg","samsung-zfold5-cream-3.jpg","samsung-zfold5-cream-4.jpg"]',1)
insert into Images values(317,'["samsung-zfold5-blue-1.jpg","samsung-zfold5-blue-2.jpg","samsung-zfold5-blue-3.jpg","samsung-zfold5-blue-4.jpg"]',1)
insert into Images values(318,'["samsung-zfold5-black-1.jpg","samsung-zfold5-black-2.jpg","samsung-zfold5-black-3.jpg","samsung-zfold5-black-4.jpg"]',1)
--image zfold4
insert into Images values(319,'["samsung-zfold4-green-1.jpg","samsung-zfold4-green-2.jpg","samsung-zfold4-green-3.jpg","samsung-zfold4-green-4.jpg"]',1)
insert into Images values(320,'["samsung-zfold4-black-1.jpg","samsung-zfold4-black-2.jpg","samsung-zfold4-black-3.jpg","samsung-zfold4-black-4.jpg"]',1)
insert into Images values(321,'["samsung-zfold4-cream-1.jpg","samsung-zfold4-cream-2.jpg","samsung-zfold4-cream-3.jpg","samsung-zfold4-cream-4.jpg"]',1)

insert into Images values(322,'["samsung-zfold4-green-1.jpg","samsung-zfold4-green-2.jpg","samsung-zfold4-green-3.jpg","samsung-zfold4-green-4.jpg"]',1)
insert into Images values(323,'["samsung-zfold4-black-1.jpg","samsung-zfold4-black-2.jpg","samsung-zfold4-black-3.jpg","samsung-zfold4-black-4.jpg"]',1)
insert into Images values(324,'["samsung-zfold4-cream-1.jpg","samsung-zfold4-cream-2.jpg","samsung-zfold4-cream-3.jpg","samsung-zfold4-cream-4.jpg"]',1)
--image zfold3
insert into Images values(325,'["samsung-zfold3-green-1.jpg","samsung-zfold3-green-2.jpg","samsung-zfold3-green-3.jpg","samsung-zfold3-green-4.jpg"]',1)
insert into Images values(326,'["samsung-zfold3-grey-1.jpg","samsung-zfold3-grey-2.jpg","samsung-zfold3-grey-3.jpg","samsung-zfold3-grey-4.jpg"]',1)
insert into Images values(327,'["samsung-zfold3-black-1.jpg","samsung-zfold3-black-2.jpg","samsung-zfold3-black-3.jpg","samsung-zfold3-black-4.jpg"]',1)

insert into Images values(328,'["samsung-zfold3-green-1.jpg","samsung-zfold3-green-2.jpg","samsung-zfold3-green-3.jpg","samsung-zfold3-green-4.jpg"]',1)
insert into Images values(329,'["samsung-zfold3-grey-1.jpg","samsung-zfold3-grey-2.jpg","samsung-zfold3-grey-3.jpg","samsung-zfold3-grey-4.jpg"]',1)
insert into Images values(330,'["samsung-zfold3-black-1.jpg","samsung-zfold3-black-2.jpg","samsung-zfold3-black-3.jpg","samsung-zfold3-black-4.jpg"]',1)
--image zflip5
insert into Images values(331,'["samsung-zflip5-green-1.jpg","samsung-zflip5-green-2.jpg","samsung-zflip5-green-3.jpg","samsung-zflip5-green-4.jpg"]',1)
insert into Images values(332,'["samsung-zflip5-purple-1.jpg","samsung-zflip5-purple-2.jpg","samsung-zflip5-purple-3.jpg","samsung-zflip5-purple-4.jpg"]',1)
insert into Images values(333,'["samsung-zflip5-gray-1.jpg","samsung-zflip5-gray-2.jpg","samsung-zflip5-gray-3.jpg","samsung-zflip5-gray-4.jpg"]',1)
insert into Images values(334,'["samsung-zflip5-cream-1.jpg","samsung-zflip5-cream-2.jpg","samsung-zflip5-cream-3.jpg","samsung-zflip5-cream-4.jpg"]',1)

insert into Images values(335,'["samsung-zflip5-purple-1.jpg","samsung-zflip5-purple-2.jpg","samsung-zflip5-purple-3.jpg","samsung-zflip5-purple-4.jpg"]',1)
insert into Images values(336,'["samsung-zflip5-green-1.jpg","samsung-zflip5-green-2.jpg","samsung-zflip5-green-3.jpg","samsung-zflip5-green-4.jpg"]',1)
insert into Images values(337,'["samsung-zflip5-gray-1.jpg","samsung-zflip5-gray-2.jpg","samsung-zflip5-gray-3.jpg","samsung-zflip5-gray-4.jpg"]',1)
insert into Images values(338,'["samsung-zflip5-cream-1.jpg","samsung-zflip5-cream-2.jpg","samsung-zflip5-cream-3.jpg","samsung-zflip5-cream-4.jpg"]',1)
--image zflip4
insert into Images values(339,'["samsung-zflip4-purple-1.jpg","samsung-zflip4-purple-2.jpg","samsung-zflip4-purple-3.jpg","samsung-zflip4-purple-4.jpg"]',1)
insert into Images values(340,'["samsung-zflip4-blue-1.jpg","samsung-zflip4-blue-2.jpg","samsung-zflip4-blue-3.jpg","samsung-zflip4-blue-4.jpg"]',1)
insert into Images values(341,'["samsung-zflip4-gray-1.jpg","samsung-zflip4-gray-2.jpg","samsung-zflip4-gray-3.jpg","samsung-zflip4-gray-4.jpg"]',1)
insert into Images values(342,'["samsung-zflip4-yello-1.jpg","samsung-zflip4-yello-2.jpg","samsung-zflip4-yello-3.jpg","samsung-zflip4-yello-4.jpg"]',1)

insert into Images values(343,'["samsung-zflip4-blue-1.jpg","samsung-zflip4-blue-2.jpg","samsung-zflip4-blue-3.jpg","samsung-zflip4-blue-4.jpg"]',1)
insert into Images values(344,'["samsung-zflip4-purple-1.jpg","samsung-zflip4-purple-2.jpg","samsung-zflip4-purple-3.jpg","samsung-zflip4-purple-4.jpg"]',1)
insert into Images values(345,'["samsung-zflip4-gray-1.jpg","samsung-zflip4-gray-2.jpg","samsung-zflip4-gray-3.jpg","samsung-zflip4-gray-4.jpg"]',1)
insert into Images values(346,'["samsung-zflip4-yello-1.jpg","samsung-zflip4-yello-2.jpg","samsung-zflip4-yello-3.jpg","samsung-zflip4-yello-4.jpg"]',1)
--image zflip3
insert into Images values(347,'["samsung-zflip3-black-1.jpg","samsung-zflip3-black-2.jpg","samsung-zflip3-black-3.jpg","samsung-zflip3-black-4.jpg"]',1)
insert into Images values(348,'["samsung-zflip3-green-1.jpg","samsung-zflip3-green-2.jpg","samsung-zflip3-green-3.jpg","samsung-zflip3-green-4.jpg"]',1)
insert into Images values(349,'["samsung-zflip3-purple-1.jpg","samsung-zflip3-purple-2.jpg","samsung-zflip3-purple-3.jpg","samsung-zflip3-purple-4.jpg"]',1)
insert into Images values(350,'["samsung-zflip3-cream-1.jpg","samsung-zflip3-cream-2.jpg","samsung-zflip3-cream-3.jpg","samsung-zflip3-cream-4.jpg"]',1)

insert into Images values(351,'["samsung-zflip3-green-1.jpg","samsung-zflip3-green-2.jpg","samsung-zflip3-green-3.jpg","samsung-zflip3-green-4.jpg"]',1)
insert into Images values(352,'["samsung-zflip3-black-1.jpg","samsung-zflip3-black-2.jpg","samsung-zflip3-black-3.jpg","samsung-zflip3-black-4.jpg"]',1)
insert into Images values(353,'["samsung-zflip3-purple-1.jpg","samsung-zflip3-purple-2.jpg","samsung-zflip3-purple-3.jpg","samsung-zflip3-purple-4.jpg"]',1)
insert into Images values(354,'["samsung-zflip3-cream-1.jpg","samsung-zflip3-cream-2.jpg","samsung-zflip3-cream-3.jpg","samsung-zflip3-cream-4.jpg"]',1)
--image m34
insert into Images values(355,'["samsung-m34-green-1.jpg","samsung-m34-green-2.jpg","samsung-m34-green-3.jpg","samsung-m34-green-4.jpg"]',1)
insert into Images values(356,'["samsung-m34-black-1.jpg","samsung-m34-black-2.jpg","samsung-m34-black-3.jpg","samsung-m34-black-4.jpg"]',1)
--image m54
insert into Images values(357,'["samsung-m54-green-1.jpg","samsung-m54-green-2.jpg","samsung-m54-green-3.jpg","samsung-m54-green-4.jpg"]',1)
insert into Images values(358,'["samsung-m54-black-1.jpg","samsung-m54-black-2.jpg","samsung-m54-black-3.jpg","samsung-m54-black-4.jpg"]',1)
--image a35
insert into Images values(359,'["samsung-a35-black-1.jpg","samsung-a35-black-2.jpg","samsung-a35-black-3.jpg","samsung-a35-black-4.jpg"]',1)
insert into Images values(360,'["samsung-a35-blue-1.jpg","samsung-a35-blue-2.jpg","samsung-a35-blue-3.jpg","samsung-a35-blue-4.jpg"]',1)
insert into Images values(361,'["samsung-a35-blue-1.jpg","samsung-a35-blue-2.jpg","samsung-a35-blue-3.jpg","samsung-a35-blue-4.jpg"]',1)
insert into Images values(362,'["samsung-a35-black-1.jpg","samsung-a35-black-2.jpg","samsung-a35-black-3.jpg","samsung-a35-black-4.jpg"]',1)
--image a14
insert into Images values(363,'["samsung-a14-black-1.jpg","samsung-a14-black-2.jpg","samsung-a14-black-3.jpg","samsung-a14-black-4.jpg"]',1)
insert into Images values(354,'["samsung-a14-gray-1.jpg","samsung-a14-gray-2.jpg","samsung-a14-gray-3.jpg","samsung-a14-gray-4.jpg"]',1)
insert into Images values(365,'["samsung-a14-red-1.jpg","samsung-a14-red-2.jpg","samsung-a14-red-3.jpg","samsung-a14-red-4.jpg"]',1)
--image vivo x70
insert into Images values(366,'["vivo-x70-black-1.jpg","vivo-x70-black-2.jpg","vivo-x70-black-3.jpg","vivo-x70-black-4.jpg"]',1)
insert into Images values(367,'["vivo-x70-green-1.jpg","vivo-x70-green-2.jpg","vivo-x70-green-3.jpg","vivo-x70-green-4.jpg"]',1)
--image vivo x70 pro
insert into Images values(368,'["vivo-x70pro-green-1.jpg","vivo-x70pro-green-2.jpg","vivo-x70pro-green-3.jpg","vivo-x70pro-green-4.jpg"]',1)
insert into Images values(369,'["vivo-x70pro-black-1.jpg","vivo-x70pro-black-2.jpg","vivo-x70pro-black-3.jpg","vivo-x70pro-black-4.jpg"]',1)
--image vivo x80
insert into Images values(370,'["vivo-x80-green-1.jpg","vivo-x80-green-2.jpg","vivo-x80-green-3.jpg","vivo-x80-green-4.jpg"]',1)
insert into Images values(371,'["vivo-x80-black-1.jpg","vivo-x80-black-2.jpg","vivo-x80-black-3.jpg","vivo-x80-black-4.jpg"]',1)
--image vivo x80 pro
insert into Images values(372,'["vivo-x80pro-black-1.jpg","vivo-x80pro-black-2.jpg","vivo-x80pro-black-3.jpg","vivo-x80pro-black-4.jpg"]',1)
insert into Images values(373,'["vivo-x80pro-black-1.jpg","vivo-x80pro-black-2.jpg","vivo-x80pro-black-3.jpg","vivo-x80pro-black-4.jpg"]',1)
--image vivo x60
insert into Images values(374,'["vivo-x60-blue-1.jpg","vivo-x60-blue-2.jpg","vivo-x60-blue-3.jpg","vivo-x60-blue-4.jpg"]',1)
insert into Images values(375,'["vivo-x60-black-1.jpg","vivo-x60-black-2.jpg","vivo-x60-black-3.jpg","vivo-x60-black-4.jpg"]',1)
--image vivo v29e
insert into Images values(376,'["vivo-v29e-black-1.jpg","vivo-v29e-black-2.jpg","vivo-v29e-black-3.jpg","vivo-v29e-black-4.jpg"]',1)
insert into Images values(377,'["vivo-v29e-blue-1.jpg","vivo-v29e-blue-2.jpg","vivo-v29e-blue-3.jpg","vivo-v29e-blue-4.jpg"]',1)
--image vivo v29
insert into Images values(378,'["vivo-v29-black-1.jpg","vivo-v29-black-2.jpg","vivo-v29-black-3.jpg","vivo-v29-black-4.jpg"]',1)
insert into Images values(379,'["vivo-v29-purple-1.jpg","vivo-v29-purple-2.jpg","vivo-v29-purple-3.jpg","vivo-v29-purple-4.jpg"]',1)
--image vivo v25e
insert into Images values(380,'["vivo-v25e-black-1.jpg","vivo-v25e-black-2.jpg","vivo-v25e-black-3.jpg","vivo-v25e-black-4.jpg"]',1)
insert into Images values(381,'["vivo-v25e-blue-1.jpg","vivo-v25e-blue-2.jpg","vivo-v25e-blue-3.jpg","vivo-v25e-blue-4.jpg"]',1)
--image vivo v25
insert into Images values(382,'["vivo-v25-black-1.jpg","vivo-v25-black-2.jpg","vivo-v25-black-3.jpg","vivo-v25-black-4.jpg"]',1)
insert into Images values(383,'["vivo-v25-yellow-1.jpg","vivo-v25-yellow-2.jpg","vivo-v25-yellow-3.jpg","vivo-v25-yellow-4.jpg"]',1)
--image vivo v27e
insert into Images values(384,'["vivo-v27e-black-1.jpg","vivo-v27e-black-2.jpg","vivo-v27e-black-3.jpg","vivo-v27e-black-4.jpg"]',1)
insert into Images values(385,'["vivo-v27e-purple-1.jpg","vivo-v27e-purple-2.jpg","vivo-v27e-purple-3.jpg","vivo-v27e-purple-4.jpg"]',1)
--image vivo v27
insert into Images values(386,'["vivo-v27-blue-1.jpg","vivo-v27-blue-2.jpg","vivo-v27-blue-3.jpg","vivo-v27-blue-4.jpg"]',1)
insert into Images values(387,'["vivo-v27-green-1.jpg","vivo-v27-green-2.jpg","vivo-v27-green-3.jpg","vivo-v27-green-4.jpg"]',1)
--image vivo y100
insert into Images values(388,'["vivo-y100-black-1.jpg","vivo-y100-black-2.jpg","vivo-y100-black-3.jpg","vivo-y100-black-4.jpg"]',1)
insert into Images values(389,'["vivo-y100-green-1.jpg","vivo-y100-green-2.jpg","vivo-y100-green-3.jpg","vivo-y100-green-4.jpg"]',1)
--image vivo y03
insert into Images values(390,'["vivo-y03-black-1.jpg","vivo-y03-black-2.jpg","vivo-y03-black-3.jpg","vivo-y03-black-4.jpg"]',1)
insert into Images values(391,'["vivo-y03-green-1.jpg","vivo-y03-green-2.jpg","vivo-y03-green-3.jpg","vivo-y03-green-4.jpg"]',1)
insert into Images values(392,'["vivo-y03-black-1.jpg","vivo-y03-black-2.jpg","vivo-y03-black-3.jpg","vivo-y03-black-4.jpg"]',1)
insert into Images values(393,'["vivo-y03-green-1.jpg","vivo-y03-green-2.jpg","vivo-y03-green-3.jpg","vivo-y03-green-4.jpg"]',1)
--image vivo y36
insert into Images values(394,'["vivo-y36-black-1.jpg","vivo-y36-black-2.jpg","vivo-y36-black-3.jpg","vivo-y36-black-4.jpg"]',1)
insert into Images values(395,'["vivo-y36-aqua-1.jpg","vivo-y36-aqua-2.jpg","vivo-y36-aqua-3.jpg","vivo-y36-aqua-4.jpg"]',1)
insert into Images values(396,'["vivo-y36-black-1.jpg","vivo-y36-black-2.jpg","vivo-y36-black-3.jpg","vivo-y36-black-4.jpg"]',1)
insert into Images values(397,'["vivo-y36-aqua-1.jpg","vivo-y36-aqua-2.jpg","vivo-y36-aqua-3.jpg","vivo-y36-aqua-4.jpg"]',1)
--image vivo y35
insert into Images values(398,'["vivo-y35-yellow-1.jpg","vivo-y35-yellow-2.jpg","vivo-y35-yellow-3.jpg","vivo-y35-yellow-4.jpg"]',1)
insert into Images values(399,'["vivo-y35-black-1.jpg","vivo-y35-yellow-2.jpg","vivo-y35-yellow-3.jpg","vivo-y35-yellow-4.jpg"]',1)
--image vivo t1
insert into Images values(400,'["vivo-t1-black-1.jpg","vivo-t1-black-2.jpg","vivo-t1-black-3.jpg","vivo-t1-black-4.jpg"]',1)
insert into Images values(401,'["vivo-t1-green-1.jpg","vivo-t1-green-2.jpg","vivo-t1-green-3.jpg","vivo-t1-green-4.jpg"]',1)
--image oppo find n3
insert into Images values(402,'["oppo-n3-black-1.jpg","oppo-n3-black-2.jpg","oppo-n3-black-3.jpg","oppo-n3-black-4.jpg"]',1)
insert into Images values(403,'["oppo-n3-yellow-1.jpg","oppo-n3-yellow-2.jpg","oppo-n3-yellow-3.jpg","oppo-n3-yellow-4.jpg"]',1)
--image oppo find n3 flip
insert into Images values(404,'["oppo-n3flip-pink-1.jpg","oppo-n3flip-pink-2.jpg","oppo-n3flip-pink-3.jpg","oppo-n3flip-pink-4.jpg"]',1)
insert into Images values(405,'["oppo-n3flip-black-1.jpg","oppo-n3flip-black-2.jpg","oppo-n3flip-black-3.jpg","oppo-n3flip-black-4.jpg"]',1)
insert into Images values(406,'["oppo-n3flip-yellow-1.jpg","oppo-n3flip-yellow-2.jpg","oppo-n3flip-yellow-3.jpg","oppo-n3flip-yellow-4.jpg"]',1)
--image oppo find n2 flip
insert into Images values(407,'["oppo-n2flip-black-1.jpg","oppo-n2flip-black-2.jpg","oppo-n2flip-black-3.jpg","oppo-n2flip-black-4.jpg"]',1)
insert into Images values(408,'["oppo-n2flip-purple-1.jpg","oppo-n2flip-purple-2.jpg","oppo-n2flip-purple-3.jpg","oppo-n2flip-purple-4.jpg"]',1)
--image oppo find x5 pro
insert into Images values(409,'["oppo-findx5-back-1.jpg","oppo-findx5-back-2.jpg","oppo-findx5-back-3.jpg","oppo-findx5-back-4.jpg"]',1)
insert into Images values(410,'["oppo-findx5-white-1.jpg","oppo-findx5-white-2.jpg","oppo-findx5-white-3.jpg","oppo-findx5-white-4.jpg"]',1)
--image oppo reno 11f
insert into Images values(411,'["oppo-reno-11f-blue-1.jpg","oppo-reno-11f-blue-2.jpg","oppo-reno-11f-blue-3.jpg","oppo-reno-11f-blue-4.jpg"]',1)
insert into Images values(412,'["oppo-reno-11f-green-1.jpg","oppo-reno-11f-green-2.jpg","oppo-reno-11f-green-3.jpg","oppo-reno-11f-green-4.jpg"]',1)
--image oppo reno 11 pro
insert into Images values(413,'["oppo-reno11p-gray-1.jpg","oppo-reno11p-gray-2.jpg","oppo-reno11p-gray-3.jpg","oppo-reno11p-gray-4.jpg"]',1)
insert into Images values(414,'["oppo-reno11p-white-1.jpg","oppo-reno11p-white-2.jpg","oppo-reno11p-white-3.jpg","oppo-reno11p-white-4.jpg"]',1)
--image oppo reno 11
insert into Images values(415,'["oppo-reno11-gray-1.jpg","oppo-reno11-gray-2.jpg","oppo-reno11-gray-3.jpg","oppo-reno11-gray-4.jpg"]',1)
insert into Images values(416,'["oppo-reno11-green-1.jpg","oppo-reno11-green-2.jpg","oppo-reno11-green-3.jpg","oppo-reno11-green-4.jpg"]',1)
--image oppo reno 10pro+
insert into Images values(417,'["oppo-remo10p+-gray-1.jpg","oppo-remo10p+-gray-2.jpg","oppo-remo10p+-gray-3.jpg","oppo-remo10p+-gray-4.jpg"]',1)
insert into Images values(418,'["oppo-remo10p+-purple-1.jpg","oppo-remo10p+-purple-2.jpg","oppo-remo10p+-purple-3.jpg","oppo-remo10p+-purple-4.jpg"]',1)
--image oppo reno 10pro
insert into Images values(419,'["oppo-remo10p-gray-1.jpg","oppo-remo10p-gray-2.jpg","oppo-remo10p-gray-3.jpg","oppo-remo10p-gray-4.jpg"]',1)
insert into Images values(420,'["oppo-remo10p-purple-1.jpg","oppo-remo10p-purple-2.jpg","oppo-remo10p-purple-3.jpg","oppo-remo10p-purple-4.jpg"]',1)
--image oppo reno 10
insert into Images values(421,'["oppo-reno10-gray-1.jpg","oppo-reno10-gray-2.jpg","oppo-reno10-gray-3.jpg","oppo-reno10-gray-4.jpg"]',1)
insert into Images values(422,'["oppo-reno10-blue-1.jpg","oppo-reno10-blue-2.jpg","oppo-reno10-blue-3.jpg","oppo-reno10-blue-4.jpg"]',1)
insert into Images values(423,'["oppo-reno10-gray-1.jpg","oppo-reno10-gray-2.jpg","oppo-reno10-gray-3.jpg","oppo-reno10-gray-4.jpg"]',1)
insert into Images values(424,'["oppo-reno10-blue-1.jpg","oppo-reno10-blue-2.jpg","oppo-reno10-blue-3.jpg","oppo-reno10-blue-4.jpg"]',1)
--image oppo a79
insert into Images values(425,'["oppo-a79-black-1.jpg","oppo-a79-black-2.jpg","oppo-a79-black-3.jpg","oppo-a79-black-4.jpg"]',1)
insert into Images values(426,'["oppo-a79-purple-1.jpg","oppo-a79-black-2.jpg","oppo-a79-black-3.jpg","oppo-a79-black-4.jpg"]',1)
--image oppo a98
insert into Images values(427,'["oppo-a98-black-1.jpg","oppo-a98-black-2.jpg","oppo-a98-black-3.jpg","oppo-a98-black-4.jpg"]',1)
insert into Images values(428,'["oppo-a98-blue-1.jpg","oppo-a98-blue-2.jpg","oppo-a98-blue-3.jpg","oppo-a98-blue-4.jpg"]',1)
--image oppo a78
insert into Images values(429,'["oppo-a78-black-1.jpg","oppo-a78-black-2.jpg","oppo-a78-black-3.jpg","oppo-a78-black-4.jpg"]',1)
insert into Images values(430,'["oppo-a78-green-1.jpg","oppo-a78-green-2.jpg","oppo-a78-green-3.jpg","oppo-a78-green-4.jpg"]',1)

--image xiaomi 14 ultra
insert into Images values(431,'["xiaomi-14-ultra-black-1.jpg","xiaomi-14-ultra-black-2.jpg","xiaomi-14-ultra-black-3.jpg","xiaomi-14-ultra-black-4.jpg"]',1)
insert into Images values(432,'["xiaomi-14-ultra-gray-1.jpg","xiaomi-14-ultra-gray-2.jpg","xiaomi-14-ultra-gray-3.jpg","xiaomi-14-ultra-gray-4.jpg"]',1)
--image xiaomi 14
insert into Images values(431,'["xiaomi-14-black-1.jpg","xiaomi-14-black-2.jpg","xiaomi-14-black-3.jpg","xiaomi-14-black-4.jpg"]',1)
insert into Images values(432,'["xiaomi-14-white-1.jpg","xiaomi-14-white-2.jpg","xiaomi-14-white-3.jpg","xiaomi-14-white-4.jpg"]',1)
insert into Images values(433,'["xiaomi-14-green-1.jpg","xiaomi-14-green-2.jpg","xiaomi-14-green-3.jpg","xiaomi-14-green-4.jpg"]',1)
insert into Images values(434,'["xiaomi-14-black-1.jpg","xiaomi-14-black-2.jpg","xiaomi-14-black-3.jpg","xiaomi-14-black-4.jpg"]',1)
insert into Images values(435,'["xiaomi-14-white-1.jpg","xiaomi-14-white-2.jpg","xiaomi-14-white-3.jpg","xiaomi-14-white-4.jpg"]',1)
insert into Images values(436,'["xiaomi-14-green-1.jpg","xiaomi-14-green-2.jpg","xiaomi-14-green-3.jpg","xiaomi-14-green-4.jpg"]',1)
--xiaomi 13t pro
insert into Images values(437,'["xiaomi-13tpro-black-1.jpg","xiaomi-13tpro-black-2.jpg","xiaomi-13tpro-black-3.jpg","xiaomi-13tpro-black-4.jpg"]',1)
insert into Images values(438,'["xiaomi-13tpro-blue-1.jpg","xiaomi-13tpro-blue-2.jpg","xiaomi-13tpro-blue-3.jpg","xiaomi-13tpro-blue-4.jpg"]',1)
insert into Images values(439,'["xiaomi-13tpro-green-1.jpg","xiaomi-13tpro-green-2.jpg","xiaomi-13tpro-green-3.jpg","xiaomi-13tpro-green-4.jpg"]',1)
insert into Images values(440,'["xiaomi-13tpro-black-1.jpg","xiaomi-13tpro-black-2.jpg","xiaomi-13tpro-black-3.jpg","xiaomi-13tpro-black-4.jpg"]',1)
insert into Images values(441,'["xiaomi-13tpro-blue-1.jpg","xiaomi-13tpro-blue-2.jpg","xiaomi-13tpro-blue-3.jpg","xiaomi-13tpro-blue-4.jpg"]',1)
insert into Images values(442,'["xiaomi-13tpro-green-1.jpg","xiaomi-13tpro-green-2.jpg","xiaomi-13tpro-green-3.jpg","xiaomi-13tpro-green-4.jpg"]',1)
--xiaomi note13 pro plus
insert into Images values(443,'["xiaomi-13tpro+-black-1.jpg","xiaomi-13tpro+-black-2.jpg","xiaomi-13tpro+-black-3.jpg","xiaomi-13tpro+-black-4.jpg"]',1)
insert into Images values(444,'["xiaomi-13tpro+-white-1.jpg","xiaomi-13tpro+-white-2.jpg","xiaomi-13tpro+-white-3.jpg","xiaomi-13tpro+-white-4.jpg"]',1)
insert into Images values(445,'["xiaomi-13tpro+-purple-1.jpg","xiaomi-13tpro+-purple-2.jpg","xiaomi-13tpro+-purple-3.jpg","xiaomi-13tpro+-purple-4.jpg"]',1)
--xiaomi note13 pro
insert into Images values(446,'["xiaomi-13pro-black-1.jpg","xiaomi-13pro-black-2.jpg","xiaomi-13pro-black-3.jpg","xiaomi-13pro-black-4.jpg"]',1)
insert into Images values(447,'["xiaomi-13pro-green-1.jpg","xiaomi-13pro-green-2.jpg","xiaomi-13pro-green-3.jpg","xiaomi-13pro-green-4.jpg"]',1)
insert into Images values(448,'["xiaomi-13pro-purple-1.jpg","xiaomi-13pro-purple-2.jpg","xiaomi-13pro-purple-3.jpg","xiaomi-13pro-purple-4.jpg"]',1)
--xiaomi 12t pro
insert into Images values(449,'["xiaomi-12tpro-black-1.jpg","xiaomi-12tpro-black-2.jpg","xiaomi-12tpro-black-3.jpg","xiaomi-12tpro-black-4.jpg"]',1)
insert into Images values(450,'["xiaomi-12tpro-gray-1.jpg","xiaomi-12tpro-gray-2.jpg","xiaomi-12tpro-gray-3.jpg","xiaomi-12tpro-gray-4.jpg"]',1)
--xiaomi 12t
insert into Images values(451,'["xiaomi-12t-black-1.jpg","xiaomi-12t-black-2.jpg","xiaomi-12t-black-3.jpg","xiaomi-12t-black-4.jpg"]',1)
insert into Images values(452,'["xiaomi-12t-blue-1.jpg","xiaomi-12t-blue-2.jpg","xiaomi-12t-blue-3.jpg","xiaomi-12t-blue-4.jpg"]',1)
insert into Images values(453,'["xiaomi-12t-gray-1.jpg","xiaomi-12t-gray-2.jpg","xiaomi-12t-gray-3.jpg","xiaomi-12t-gray-4.jpg"]',1)
--xiaomi redmi a2
insert into Images values(454,'["xiaomi-redmia2-blue-1.jpg","xiaomi-redmia2-blue-2.jpg","xiaomi-redmia2-blue-3.jpg","xiaomi-redmia2-blue-4.jpg"]',1)
insert into Images values(455,'["xiaomi-redmia2-black-1.jpg","xiaomi-redmia2-black-2.jpg","xiaomi-redmia2-black-3.jpg","xiaomi-redmia2-black-4.jpg"]',1)
insert into Images values(456,'["xiaomi-redmia2-green-1.jpg","xiaomi-redmia2-green-2.jpg","xiaomi-redmia2-green-3.jpg","xiaomi-redmia2-green-4.jpg"]',1)
--xiaomi redmi a2+
insert into Images values(457,'["xiaomi-redmia2+-blue-1.jpg","xiaomi-redmia2+-blue-2.jpg","xiaomi-redmia2+-blue-3.jpg","xiaomi-redmia2+-blue-4.jpg"]',1)
insert into Images values(458,'["xiaomi-redmia2+-black-1.jpg","xiaomi-redmia2+-black-2.jpg","xiaomi-redmia2+-black-3.jpg","xiaomi-redmia2+-black-4.jpg"]',1)
insert into Images values(459,'["xiaomi-redmia2+-green-1.jpg","xiaomi-redmia2+-green-2.jpg","xiaomi-redmia2+-green-3.jpg","xiaomi-redmia2+-green-4.jpg"]',1)
--xiaomi redmi note11
insert into Images values(460,'["xiaomi-note11-blue-1.jpg","xiaomi-note11-blue-2.jpg","xiaomi-note11-blue-3.jpg","xiaomi-note11-blue-4.jpg"]',1)
insert into Images values(461,'["xiaomi-note11-purple-1.jpg","xiaomi-note11-purple-2.jpg","xiaomi-note11-purple-3.jpg","xiaomi-note11-purple-.jpg"]',1)
insert into Images values(462,'["xiaomi-note11-gray-1.jpg","xiaomi-note11-gray-2.jpg","xiaomi-note11-gray-3.jpg","xiaomi-note11-gray-4.jpg"]',1)
--xiaomi redmi note11 pro
insert into Images values(463,'["xiaomi-note11pro-blue-1.jpg","xiaomi-note11pro-blue-2.jpg","xiaomi-note11pro-blue-3.jpg","xiaomi-note11pro-blue-4.jpg"]',1)
insert into Images values(464,'["xiaomi-note11pro-white-1.jpg","xiaomi-note11pro-white-2.jpg","xiaomi-note11pro-white-3.jpg","xiaomi-note11pro-white-.jpg"]',1)
insert into Images values(465,'["xiaomi-note11pro-gray-1.jpg","xiaomi-note11pro-gray-2.jpg","xiaomi-note11pro-gray-3.jpg","xiaomi-note11pro-gray-4.jpg"]',1)
--xiaomi redmi note11 pro+
insert into Images values(466,'["xiaomi-note11pro+-black-1.jpg","xiaomi-note11pro+-black-2.jpg","xiaomi-note11pro+-black-3.jpg","xiaomi-note11pro+-black-4.jpg"]',1)
insert into Images values(467,'["xiaomi-note11pro+-green-1.jpg","xiaomi-note11pro+-green-2.jpg","xiaomi-note11pro+-green-3.jpg","xiaomi-note11pro+-green-4.jpg"]',1)
insert into Images values(468,'["xiaomi-note11pro+-blue-1.jpg","xiaomi-note11pro+-blue-2.jpg","xiaomi-note11pro+-blue-3.jpg","xiaomi-note11pro+-blue-4.jpg"]',1)
insert into Images values(469,'["xiaomi-note11pro+-black-1.jpg","xiaomi-note11pro+-black-2.jpg","xiaomi-note11pro+-black-3.jpg","xiaomi-note11pro+-black-4.jpg"]',1)
insert into Images values(470,'["xiaomi-note11pro+-green-1.jpg","xiaomi-note11pro+-green-2.jpg","xiaomi-note11pro+-green-3.jpg","xiaomi-note11pro+-green-4.jpg"]',1)
insert into Images values(471,'["xiaomi-note11pro+-blue-1.jpg","xiaomi-note11pro+-blue-2.jpg","xiaomi-note11pro+-blue-3.jpg","xiaomi-note11pro+-blue-4.jpg"]',1)

-- Image huawei mate 30pro
insert into Images values(472,'["huawei-mate30pro-blue-1.jpg","huawei-mate30pro-blue-2.jpg","huawei-mate30pro-blue-3.jpg","huawei-mate30pro-blue-4.jpg"]',1)
-- Image huawei mate 20pro 
insert into Images values(473,'["huawei-mate20pro-black-1.jpg","huawei-mate20pro-black-2.jpg","huawei-mate20pro-black-3.jpg","huawei-mate20pro-black-4.jpg"]',1)
insert into Images values(474,'["huawei-mate20pro-green-1.jpg","huawei-mate20pro-green-2.jpg","huawei-mate20pro-green-3.jpg","huawei-mate20pro-green-4.jpg"]',1)
insert into Images values(475,'["huawei-mate20pro-purple-1.jpg","huawei-mate20pro-purple-2.jpg","huawei-mate20pro-purple-3.jpg","huawei-mate20pro-purple-4.jpg"]',1)
-- Image Huawei mate 20x
insert into Images values(476,'["huawei-20x-1.jpg","huawei-20x-2.jpg","huawei-20x-3.jpg","huawei-20x-4.jpg"]',1)
-- Image Huawei mate 20
insert into Images values(477,'["huawei-mate20-black-1.jpg","huawei-mate20-black-2.jpg","huawei-mate20-black-3.jpg","huawei-mate20-black-4.jpg"]',1)
insert into Images values(478,'["huawei-mate20-blue-1.jpg","huawei-mate20-blue-2.jpg","huawei-mate20-blue-3.jpg","huawei-mate20-blue-4.jpg"]',1)
-- Image huawei p40 pro +
insert into Images values(479,'["huawei-p40pro+-1.jpg","huawei-p40pro+-2.jpg","huawei-p40pro+-3.jpg","huawei-p40pro+-4.jpg"]',1)
-- Image huawei p40 pro
insert into Images values(480,'["huawei-p40pro-blue-1.jpg","huawei-p40pro-blue-2.jpg","huawei-p40pro-blue-3.jpg","huawei-p40pro-blue-4.jpg"]',1)
insert into Images values(481,'["huawei-p40pro-gray-1.jpg","huawei-p40pro-gray-2.jpg","huawei-p40pro-gray-3.jpg","huawei-p40pro-gray-4.jpg"]',1)
-- Image huawei P30 pro
insert into Images values(482,'["huawei-p30pro-blue-1.jpg","huawei-p30pro-blue-2.jpg","huawei-p30pro-blue-3.jpg","huawei-p30pro-blue-4.jpg"]',1)
insert into Images values(483,'["huawei-p30pro-purple-1.jpg","huawei-p30pro-purple-2.jpg","huawei-p30pro-purple-3.jpg","huawei-p30pro-purple-4.jpg"]',1)
-- Image P30
insert into Images values(484,'["huawei-p30-black-1.jpg","huawei-p30-black-2.jpg","huawei-p30-black-3.jpg","huawei-p30-black-4.jpg"]',1)
insert into Images values(485,'["huawei-p30-blue-1.jpg","huawei-p30-blue-2.jpg","huawei-p30-blue-3.jpg","huawei-p30-blue-4.jpg"]',1)
-- Image huawei Nova 7i
insert into Images values(486,'["huawei-nova7i-green-1.jpg","huawei-nova7i-green-2.jpg","huawei-nova7i-green-3.jpg","huawei-nova7i-green-4.jpg"]',1)
insert into Images values(487,'["huawei-nova7i-pink-1.jpg","huawei-nova7i-pink-2.jpg","huawei-nova7i-pink-3.jpg","huawei-nova7i-pink-4.jpg"]',1)
-- Image huawei nova 5t
insert into Images values(488,'["huawei-nova5t-blue-1.jpg","huawei-nova5t-blue-2.jpg","huawei-nova5t-blue-3.jpg","huawei-nova5t-blue-4.jpg"]',1)
insert into Images values(489,'["huawei-nova5t-green-1.jpg","huawei-nova5t-green-2.jpg","huawei-nova5t-green-3.jpg","huawei-nova5t-green-4.jpg"]',1)
-- Image huawei nova 3i
insert into Images values(490,'["huawei-nova3i-black-1.jpg","huawei-nova3i-black-2.jpg","huawei-nova3i-black-3.jpg","huawei-nova3i-black-4.jpg"]',1)
insert into Images values(490,'["huawei-nova3i-purple-1.jpg","huawei-nova3i-purple-2.jpg","huawei-nova3i-purple-3.jpg","huawei-nova3i-purple-4.jpg"]',1)
insert into Images values(490,'["huawei-nova3i-white-1.jpg","huawei-nova3i-white-2.jpg","huawei-nova3i-white-3.jpg","huawei-nova3i-white-4.jpg"]',1)