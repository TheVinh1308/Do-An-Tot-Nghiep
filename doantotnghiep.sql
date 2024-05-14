-- ============== SELECT DATABASE ===================================
use DB_DoAnTotNghiep

-- ========== XOÁ CÁC BẢNG TRƯỚC KHI INSSERT DỮ LIỆU ===================
delete from Brands
DBCC CHECKIDENT ('DB_DoAnTotNghiep.dbo.Brands', RESEED, 0);
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
insert into Promotions values (N'Không khuyến mãi', 0, GETDATE(),1)

-- =========================== MODPHONE =============================
-- MOD PHONE IPHONE
insert into ModPhones values(  'IPhone 15 Promax', 6.1, N'iPhone 15 Pro Max là một chiếc điện thoại thông minh cao cấp được mong đợi nhất năm 2023. 
								Với nhiều tính năng mới và cải tiến, iPhone 15 Pro Max chắc chắn sẽ là một lựa chọn tuyệt vời cho những người dùng đang
								tìm kiếm một chiếc điện thoại có hiệu năng mạnh mẽ, camera chất lượng và thiết kế sang trọng.', 8,1, 'iOS 17', N'Apple A17 Pro 6 nhân', '4422 mAh, 20 W','iphone-15-pro-max-titan-black.jpg',1,1 );
insert into ModPhones values(  'IPhone 15 Pro', 6.1, N'iPhone 15 Pro là một trong những chiếc điện thoại thông minh được mong đợi nhất năm 2023. Với nhiều 
								tính năng mới và cải tiến, iPhone 15 Pro chắc chắn sẽ là một lựa chọn tuyệt vời cho những người dùng đang tìm kiếm một chiếc 
								điện thoại cao cấp.', 8,1, 'iOS 17', N'Apple A17 Pro 6 nhân', '3274 mAh, 20 W','iphone-15-pro-titan-white.jpg',1,1 );
insert into ModPhones values(  'IPhone 15 Plus', 6.7, N'iPhone 15 Plus thu hút mọi ánh nhìn ngay khi ra mắt nhờ có vẻ ngoài cao cấp, 
								trang bị bộ xử lý mạnh mẽ, cụm camera kép đặc trưng cho khả năng chụp ảnh cực nét cùng màn hình chất lượng cao, 
								để bạn tận hưởng trải nghiệm sử dụng tuyệt vời. ', 8,1, 'iOS 17', N'Apple A16 Bionic', '4383 mAh, 20 W','iphone-15-plus-green.jpg',1,1 );
insert into ModPhones values(  'IPhone 15 ', 6.1, N'iPhone 15 128GB là mẫu điện thoại cao cấp được Apple cho ra mắt vào tháng 09/2023, 
								máy nhận được nhiều sự chú ý đến từ người dùng khi mang trong mình bộ cấu hình cực khủng, vẻ ngoài thu hút
								cùng khả năng quay video - chụp ảnh đỉnh cao.', 8,1, 'iOS 17', N'Apple A16 Bionic', '3349 mAh, 20 W','iphone-15-yellow.jpg',1,1 );
insert into ModPhones values(  'IPhone 14 Promax ', 6.7, N'iPhone 14 Pro Max một siêu phẩm trong giới smartphone được nhà Táo tung ra thị trường vào tháng 09/2022. 
								Máy trang bị con chip Apple A16 Bionic vô cùng mạnh mẽ, đi kèm theo đó là thiết kế màn hình mới, hứa hẹn mang lại những trải 
								nghiệm đầy mới mẻ cho người dùng iPhone.', 8,1, 'iOS 16', N'Apple A16 Bionic', '4323 mAh, 20 W','iphone-14-pro-max-sliver.jpg',1,1 );
insert into ModPhones values(  'IPhone 14 Pro ', 6.7, N'iPhone 14 Pro Max một siêu phẩm trong giới smartphone được nhà Táo tung ra thị trường vào tháng 09/2022. 
								Máy trang bị con chip Apple A16 Bionic vô cùng mạnh mẽ, đi kèm theo đó là thiết kế màn hình mới, hứa hẹn mang lại những trải 
								nghiệm đầy mới mẻ cho người dùng iPhone.', 8,1, 'iOS 16', N'Apple A16 Bionic', '4323 mAh, 20 W','iphone-14-pro-gold.jpg',1,1 );
insert into ModPhones values(  'IPhone 14 Plus ', 6.7, N'Sau nhiều thế hệ điện thoại của Apple thì cái tên “Plus” cũng đã chính thức trở lại vào năm 2022 
								và xuất hiện trên chiếc iPhone 14 Plus 128GB, nổi trội với ngoại hình bắt trend cùng màn hình kích thước lớn để đem đến không gian 
								hiển thị tốt hơn cùng cấu hình mạnh mẽ không đổi so với bản tiêu chuẩn.', 6,1, 'iOS 16', N'Apple A15 Bionic', '4325 mAh, 20 W','iphone-14-plus-yellow.jpg',1,1 );
insert into ModPhones values(  'IPhone 14', 6.1, N'iPhone 14 128GB được xem là mẫu smartphone bùng nổ của nhà táo trong năm 2022, ấn tượng với ngoại hình trẻ trung, màn hình chất 
								lượng đi kèm với những cải tiến về hệ điều hành và thuật toán xử lý hình ảnh, giúp máy trở thành cái tên thu hút được đông đảo người dùng quan tâm 
								tại thời điểm ra mắt.', 6,1, 'iOS 16', N'Apple A15 Bionic', '4379 mAh, 20 W','iphone-14-purple.jpg',1,1 );
insert into ModPhones values(  'IPhone 13 Promax', 6.7, N'Điện thoại iPhone 13 Pro Max 128 GB - siêu phẩm được mong chờ nhất ở nửa cuối năm 2021 đến từ Apple. Máy có thiết kế
								không mấy đột phá khi so với người tiền nhiệm, bên trong đây vẫn là một sản phẩm có màn hình siêu đẹp, tần số quét được nâng cấp lên 120 Hz mượt mà, 
								cảm biến camera có kích thước lớn hơn, cùng hiệu năng mạnh mẽ với sức mạnh đến từ Apple A15 Bionic, sẵn sàng cùng bạn chinh phục mọi thử thách.', 6,1, 'iOS 15', N'Apple A15 Bionic', '4352 mAh, 20 W','iphone-13-pro-max-xanh-la.jpg',1,1 );
insert into ModPhones values(  'IPhone 13 Pro', 6.1, N'Mỗi lần ra mắt phiên bản mới là mỗi lần iPhone chiếm sóng trên khắp các mặt trận và lần này cái tên khiến vô số người "sục sôi" là iPhone 13 Pro,
								chiếc điện thoại thông minh vẫn giữ nguyên thiết kế cao cấp, cụm 3 camera được nâng cấp, cấu hình mạnh mẽ cùng thời lượng pin lớn ấn tượng. ', 6,1, 'iOS 15', N'Apple A15 Bionic', '3095 mAh, 20 W','iphone-13-pro-bac.jpg',1,1 );
insert into ModPhones values(  'IPhone 13 ', 6.1, N'Apple thỏa mãn sự chờ đón của iFan và người dùng với sự ra mắt của iPhone 13. Dù ngoại hình không có nhiều thay đổi so với iPhone 12 nhưng với cấu hình mạnh mẽ hơn, 
								đặc biệt pin “trâu” hơn và khả năng quay phim chụp ảnh cũng ấn tượng hơn, hứa hẹn mang đến những trải nghiệm thú vị trên phiên bản mới này.', 4,1, 'iOS 15', N'Apple A15 Bionic', '3240 mAh, 20 W','iphone-13-hong.jpg',1,1 );
insert into ModPhones values(  'IPhone 12 Promax ', 6.7, N'iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt
								nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.', 6,1, 'iOS 15', N'Apple A14 Bionic', '3687 mAh, 20 W','iphone-12-pro-max-gold.jpg',1,1 );
insert into ModPhones values(  'IPhone 12 Pro ', 6.1, N'iPhone 12 Pro - "Siêu phẩm công nghệ" với nhiều nâng cấp mạnh
								mẽ về thiết kế, cấu hình và hiệu năng, khẳng định đẳng cấp thời thượng trên thị trường smartphone cao cấp.', 6,1, 'iOS 15', N'Apple A14 Bionic', '2815 mAh, 20 W','iphone-12-pro-bac.jpg',1,1 );
insert into ModPhones values(  'IPhone 12 ', 6.1, N'Trong những tháng cuối năm 2020, Apple đã chính thức giới thiệu đến người dùng cũng như iFan thế hệ iPhone 12 series mới với hàng loạt tính năng bứt phá, 
								thiết kế được lột xác hoàn toàn, hiệu năng đầy mạnh mẽ và một trong số đó chính là iPhone 12 64GB.', 4,1, 'iOS 15', N'Apple A14 Bionic', '2815 mAh, 20 W','iphone-12-tim.jpg',1,1 );
insert into ModPhones values(  'IPhone 11 Promax ', 6.5, N'Trong năm 2019 thì chiếc smartphone được nhiều người mong muốn sở hữu trên tay và sử dụng nhất không ai khác chính là iPhone 11 Pro Max 64GB 
								tới từ nhà Apple.', 4,1, 'iOS 14', N'Apple A13 Bionic', '3969 mAh, 20 W','iphone-11-pro-max-gold.jpg',1,1 );
insert into ModPhones values(  'IPhone 11 Pro ', 5.8, N'Nếu như bây giờ để lựa chọn một thiết bị có thể sử dụng ổn định và được cập nhật trong khoảng 3 năm nữa
								thì không có sự lựa chọn nào xuất sắc hơn chiếc iPhone 11 Pro 64GB, siêu phẩm mới được giới thiệu cách đây không lâu tới từ Apple.', 4,1, 'iOS 14', N'Apple A13 Bionic', '3046 mAh, 20 W','iphone-11-pro-gold.jpg',1,1 );
insert into ModPhones values(  'IPhone 11', 6.1, N'Apple đã chính thức trình làng bộ 3 siêu phẩm iPhone 11, trong đó phiên bản iPhone 11 64GB có mức giá rẻ nhất nhưng vẫn
								được nâng cấp mạnh mẽ như iPhone Xr ra mắt trước đó.', 4,1, 'iOS 15', N'Apple A13 Bionic', '3110 mAh, 20 W','iphone-11-red.jpg',1,1 );

-- MOD PHONE SAMSUNG
insert into ModPhones values(  'Galaxy S24 Ultra', 6.8, N'Samsung Galaxy S24 Ultra mẫu điện thoại cao cấp được ra mắt vào đầu năm 2024, sản phẩm tiếp tục kế thừa và cải tiến từ thế hệ trước. 
								Điểm đặc biệt là sử dụng chip Snapdragon 8 Gen 3 for Galaxy, camera 200 MP và tích hợp nhiều tính năng AI.', 12,2, 'Android 14', N'Snapdragon 8 Gen 3 for Galaxy', '5000 mAh, 45 W','sss24u.png',1,1 );
insert into ModPhones values(  'Galaxy S24 Plus', 6.7, N'Samsung đã cho ra mắt Samsung Galaxy S24+ 5G 256GB, chiếc điện thoại đẳng cấp của họ tại sự kiện hàng năm diễn ra vào ngày 18/01 tại Mỹ. Điểm độc đáo của sản phẩm nằm ở chip mới của Samsung,
								đi kèm với sự phát triển trong việc bổ sung nhiều tính năng thông minh có tích hợp AI và tăng cường khả năng chụp ảnh ở phần camera.', 12,2, 'Android 14', N'Exynos 2400', '4900 mAh, 45 W','sss24p.png',1,1 );
insert into ModPhones values(  'Galaxy S24', 6.2, N'Trong sự kiện Unpacked 2024 diễn ra vào ngày 18/01, Samsung đã chính thức ra mắt chiếc điện thoại Samsung Galaxy S24. Sản phẩm này mang đến nhiều cải tiến độc đáo, bao gồm việc sử dụng chip mới của Samsung,
								tích hợp nhiều tính năng thông minh sử dụng trí tuệ nhân tạo và cải thiện đáng kể hiệu suất chụp ảnh từ hệ thống camera.', 8,2, 'Android 14', N'Exynos 2400', '4000 mAh, 25 W','sss24.png',1,1 );
insert into ModPhones values(  'Galaxy S23 Ultra', 6.8, N'Samsung Galaxy S23 Ultra 5G 256GB là chiếc smartphone cao cấp nhất của nhà Samsung, sở hữu cấu hình không tưởng với con chip khủng được Qualcomm tối ưu riêng cho dòng Galaxy và camera lên đến 200 MP,
								xứng danh là chiếc flagship Android được mong đợi nhất trong năm 2023.', 8,2, 'Android 14', N'Exynos 2400', '5000 mAh, 45 W','sss23u.png',1,1 );
insert into ModPhones values(  'Galaxy S23 FE', 6.4, N'Nắm bắt xu hướng công nghệ, hãng đã trang bị cho Samsung Galaxy S23 FE 5G 256GB những tính năng độc đáo và mạnh mẽ bao gồm camera 
								50 MP có nhiều tính năng chụp ảnh, cấu hình mạnh nhờ chip Exynos 2200 và thiết kế bắt mắt.', 8,2, 'Android 13', N'Exynos 2200 8 nhân', '4500 mAh, 25 W','sss23f.png',1,1 );
insert into ModPhones values(  'Galaxy S23', 6.1, N'Samsung Galaxy S23 5G 128GB chắc hẳn không còn là cái tên quá xa lạ đối với các tín đồ công nghệ hiện nay, được xem là một trong những gương mặt chủ chốt 
								đến từ nhà Samsung với cấu hình mạnh mẽ bậc nhất, camera trứ danh hàng đầu cùng lối hoàn thiện vô cùng sang trọng và hiện đại.', 8,2, 'Android 13', N'Snapdragon 8 Gen 2 for Galaxy', '3900 mAh, 25 W','sss23.png',1,1 );
insert into ModPhones values(  'Galaxy S22 Ultra', 6.8, N'Galaxy S22 Ultra 5G chiếc smartphone cao cấp nhất trong bộ 3 Galaxy S22 series mà Samsung đã cho ra mắt và lần nữa S22 Ultra 5G tiếp tục trở lại đầy ngoạn mục mang đến 1 diện mạo mới khi tích 
								hợp bút S Pen hoàn hảo trong thân máy, trang bị vi xử lý mạnh mẽ cho các tác vụ sử dụng vô cùng mượt mà và nổi bật hơn với cụm camera không viền độc đáo mang đậm dấu ấn riêng và có mức giá bán siêu hấp dẫn.', 8,2, 'Android 12', N'Snapdragon 8 Gen 1', '5000 mAh, 45 W','sss22u.png',1,1 );
insert into ModPhones values(  'Galaxy S22', 6.1, N'Samsung Galaxy S22 ra mắt với diện mạo vô cùng tinh tế và trẻ trung, mang trong mình thiết kế phẳng theo xu hướng thịnh hành, màn hình 120 Hz mượt mà,
								cụm camera AI 50 MP và bộ xử lý đến từ Qualcomm.', 8,2, 'Android 12', N'Snapdragon 8 Gen 1', '3700 mAh, 25 W','sss22.png',1,1 );
insert into ModPhones values(  'Samsung Galaxy Z Fold5', 7.6, N'Samsung Galaxy Z Fold5 là mẫu điện thoại cao cấp được ra mắt vào tháng 07/2023 với nhiều điểm đáng chú ý như thiết kế gập độc đáo,
								hiệu năng mạnh mẽ nhờ chip Snapdragon 8 Gen 2 for Galaxy cùng camera quay chụp sắc nét.', 12,2, 'Android 13', N'Snapdragon 8 Gen 2 for Galaxy', '4400 mAh, 25 W','sszfold5.png',1,1 );
insert into ModPhones values(  'Samsung Galaxy Z Fold4', 7.6, N'Tại sự kiện Samsung Unpacked thường niên, Samsung Galaxy Z Fold4 256GB chính thức được trình làng thị trường công nghệ, mang trên mình nhiều cải tiến đáng giá giúp Galaxy Z Fold 
								trở thành dòng điện thoại gập đã tốt nay càng tốt hơn.', 12,2, 'Android 12', N'Snapdragon 8+ Gen 1', '4400 mAh, 25 W','sszfold4.png',1,1 );
insert into ModPhones values(  'Samsung Galaxy Z Fold3', 7.6, N'Samsung Galaxy Z Fold3 5G, chiếc điện thoại được nâng cấp toàn diện về nhiều mặt, đặc biệt đây là điện thoại màn hình gập đầu tiên trên thế giới có camera ẩn (08/2021).
								Sản phẩm sẽ là một “cú hit” của Samsung góp phần mang đến những trải nghiệm mới cho người dùng.', 12,2, 'Android 11', N'Snapdragon 888', '4400 mAh, 25 W','sszfold3.png',1,1 );
insert into ModPhones values(  'Samsung Galaxy Z Flip5', 6.7, N'Samsung Galaxy Z Flip5 đã chính thức ra mắt vào ngày 26 tháng 7. Đây là một chiếc điện thoại thông minh có thiết kế độc đáo với màn hình gập, 
								được trang bị bộ vi xử lý cao cấp Snapdragon 8 Gen 2 for Galaxy, RAM 8 GB, bộ nhớ trong 256 GB, camera kép 12 MP và pin 3700 mAh.', 8,2, 'Android 13', N'Snapdragon 8 Gen 2 for Galaxy', '3700 mAh, 25 W','sszflip5.png',1,1 );
insert into ModPhones values(  'Samsung Galaxy Z Flip4', 6.7, N'Samsung Galaxy Z Flip4 128GB đã chính thức ra mắt thị trường công nghệ, đánh dấu sự trở lại của Samsung trên con đường định hướng người dùng về sự tiện lợi trên những chiếc điện thoại gập.
								Với độ bền được gia tăng cùng kiểu thiết kế đẹp mắt giúp Flip4 trở thành một trong những tâm điểm sáng giá cho nửa cuối năm 2022.', 8,2, 'Android 12', N'Snapdragon 8+ Gen 1', '3700 mAh, 25 W','sszflip4.png',1,1 );
insert into ModPhones values(  'Samsung Galaxy Z Flip3', 6.7, N'Trong sự kiện Galaxy Unpacked hồi 11/8, Samsung đã chính thức trình làng mẫu điện thoại màn hình gập thế hệ mới mang tên Samsung Galaxy Z Flip3 5G 128GB. Đây là một siêu phẩm với màn hình 
								gập dạng vỏ sò cùng nhiều điểm cải tiến và thông số ấn tượng, sản phẩm chắc chắn sẽ thu hút được rất nhiều sự quan tâm của người dùng, đặc biệt là phái nữ.', 8,2, 'Android 11', N'Snapdragon 888', '3300 mAh, 15 W','sszflip3.png',1,1 );
insert into ModPhones values(  'Samsung Galaxy M34', 6.5, N'Samsung Galaxy M34 5G đã thu hút sự chú ý của cộng đồng người dùng smartphone không chỉ với mức giá hấp dẫn mà còn với bộ thông số kỹ thuật ấn tượng. Khả năng vượt trội của camera, 
								pin lớn cùng với thiết kế bắt mắt của chiếc điện thoại hứa hẹn mang đến những trải nghiệm sử dụng tốt nhất dành cho bạn.', 8,2, 'Android 13', N'Exynos 1280', '6000 mAh, 25 W','ssm34.png',1,1 );
insert into ModPhones values(  'Samsung Galaxy M54', 6.7, N'Tiếp nối thành công của Galaxy M53 5G, Samsung tiếp tục tung ra thị trường mẫu điện thoại Samsung Galaxy M54 5G. Lần ra mắt này Samsung đã nâng cấp về mặt hiệu năng,
								dung lượng pin đồng thời cải tiến về mặt thiết kế giúp đem đến sản phẩm tốt nhất cho bạn.', 8,2, 'Android 13', N'Exynos 1380 8 nhân', '6000 mAh, 25 W','ssm54.png',1,1 );
insert into ModPhones values(  'Samsung Galaxy A35', 6.6, N'Samsung Galaxy A35 5G là một trong những dòng điện thoại thông minh tầm trung đáng chú ý của Samsung. Máy sở hữu cho mình một hiệu suất mạnh mẽ, 
								màn hình sắc nét và viên pin lớn, chiếc điện thoại hứa hẹn mang đến trải nghiệm đa dạng và tuyệt vời cho người dùng.', 8,2, 'Android 14', N'Exynos 1380 8 nhân', '5000 mAh, 25 W','ssa35.png',1,1 );
insert into ModPhones values(  'Samsung Galaxy A14', 6.6, N'Samsung Galaxy A14 5G có thể là chiếc smartphone đầu tiên của năm 2023 được nhà sản xuất đến từ Hàn Quốc phát hành chính thức ở Việt Nam. Máy nổi bật với lối thiết kế trẻ trung, 
								màn hình kích thước lớn và camera chính có độ phân giải lên tới 50 MP.', 8,2, 'Android 13', N'MediaTek Dimensity 700', '5000 mAh, 25 W','ssa14.png',1,1 );

-- MOD PHONE VIVO
insert into ModPhones values(  'Vivo X70', 6.56, N'Vivo X70 ra mắt với hàng loạt đổi mới không chỉ ở ngoại hình mà cả bên trong. Chiếc điện thoại có khả năng nhiếp ảnh chuyên nghiệp, hiệu năng vượt trội cùng với tốc độ kết nối mạng 5G hàng đầu, 
								chắc chắn sẽ đáp ứng nhu cầu giải trí hằng ngày của bạn.', 8,3, 'Android 11', N'MediaTek Dimensity 1200', '4400 mAh, 44 W','vvx70.png',1,1 );
insert into ModPhones values(  'Vivo X70 Pro', 6.56, N'Vivo cho ra mắt Vivo X70 Pro, một sản phẩm cao cấp ấn tượng với kiểu dáng lẫn hiệu năng tuyệt vời. Đặc biệt, camera còn được nâng cấp hàng loạt các tính năng thông minh, cùng bạn sáng tạo nên
								những kiệt tác đầy nghệ thuật.', 12,3, 'Android 11', N'MediaTek Dimensity 1200', '4450 mAh, 44 W','vvx70pro.png',1,1 );
insert into ModPhones values(  'Vivo X80', 6.78, N'Vivo X80 được xem là thiết bị hướng đến đối tượng người dùng chuyên nhiếp ảnh trên điện thoại, bằng việc hợp tác cùng nhà sản xuất ống kính nổi tiếng mang thương hiệu ZEISS. 
								Với những tính năng mới mẻ hay chế độ quay - chụp độc đáo, X80 hứa hẹn mang đến cho bạn những trải nghiệm đầy mới lạ và chất lượng.', 12,3, 'Android 12', N'MediaTek Dimensity 9000', '4500 mAh, 80 W','vvx80.png',1,1 );
insert into ModPhones values(  'Vivo X80 Pro', 6.78, N'Mới đây Vivo đã trở lại đường đua cho các sản phẩm flagship khi tung ra phiên bản Vivo X80 Pro. Máy được trang bên trong một cấu hình mạnh mẽ hứa hẹn mang đến cho bạn những trải
								nghiệm chơi game đồ họa cao một cách mượt mà. Cùng với đó là sự hợp tác với nhà sản xuất ống kính ZEISS để mang lại nhiều tính năng mới mẻ.', 12,3, 'Android 12', N'Snapdragon 8 Gen 1', '4700 mAh, 80 W','vvx80pro.png',1,1 );
insert into ModPhones values(  'Vivo X60', 6.56, N'Vivo X60 - mẫu smartphone mới nhất thuộc dòng X series cao cấp vừa được ra mắt. Mang thiết kế ấn tượng, hiệu năng mạnh mẽ và cụm camera ZEISS dẫn đầu công nghệ. 
								Thêm một siêu phẩm đến từ Vivo mà các tín đồ công nghệ không thể bỏ lỡ.', 8,3, 'Android 11', N'Exynos 1080', '4300 mAh','vvx60.png',1,1 );
insert into ModPhones values(  'Vivo V29e', 6.67, N'vivo V29e 5G là một phiên bản điện thoại di động đáng chú ý trong phân khúc tầm trung, đặc biệt với sự kết hợp tinh tế giữa thiết kế và hiệu suất. Điều làm nổi bật chiếc điện thoại này chính là camera chất lượng,
								thiết kế sang trọng và viên pin lớn kèm sạc nhanh. ', 12,3, 'Android 13', N'Snapdragon 695 5G', '4800 mAh, 44w','vvv29e.png',1,1 );
insert into ModPhones values(  'Vivo V29 ', 6.78, N'Nhằm cạnh tranh với nhiều hãng điện thoại khác trong phân khúc, vivo đã cho ra mắt sản phẩm mang tên vivo V29 5G, sản phẩm lần này đem đến nhiều cải tiến mới với thiết kế độc đáo, 
								hiệu năng mạnh mẽ với chip rồng cùng camera hỗ trợ chụp ảnh sắc nét.', 12,3, 'Android 13', N'Snapdragon 778G 5G', '4600 mAh, 80w','vvv29.png',1,1 );
insert into ModPhones values(  'Vivo V25e ', 6.44, N'Cùng với vivo V25, nhà sản xuất Trung Quốc cũng đã tung ra thị trường mẫu điện thoại vivo V25E mới sở hữu thiết kế vô cùng hiện đại và độc đáo với mặt lưng kính có thể thay đổi màu sắc, 
								camera 64 MP hỗ trợ OIS và sạc nhanh 44 W, đáp ứng đầy đủ nhu cầu của người dùng.', 8,3, 'Android 12', N'MediaTek Helio G99', '4500 mAh, 44w','vvv25e.png',1,1 );
insert into ModPhones values(  'Vivo V25 ', 6.44, N'2022 là một năm bùng nổ cho điện thoại V series khi nhiều sản phẩm được cho ra mắt với thông số và thiết kế rất ấn tượng, trong đó có Vivo V25 vừa được giới thiệu vào tháng 10/2022, 
								hứa hẹn sẽ gây sốt trên thị trường công nghệ trong giai đoạn cuối năm nay nhờ tạo hình đẹp cùng hiệu năng mạnh mẽ.', 8,3, 'Android 12', N'MediaTek Dimensity 900 5G', '4500 mAh, 44w','vvv25.png',1,1 );
insert into ModPhones values(  'Vivo V27e ', 6.62, N'vivo V27e một trong những chiếc điện thoại tầm trung nổi bật của vivo trong năm 2023. Với thiết kế độc đáo và khả năng chụp ảnh - quay phim ấn tượng, vì thế máy đã mang lại cho vivo nhiều niềm tự hào 
								khi ra mắt tại thị trường Việt Nam, hứa hẹn mang đến trải nghiệm tuyệt vời đến với người dùng.', 8,3, 'Android 13', N'MediaTek Helio G99', '4600 mAh, 66w','vvv27e.png',1,1 );
insert into ModPhones values(  'Vivo V27 ', 6.78, N'Với thiết kế sang trọng, camera đỉnh cao cùng hiệu năng mạnh mẽ, Vivo V27 5G chính thức là cái tên sở hữu đầy đủ các yếu tố trên vừa được nhà Vivo cho ra mắt vào khoảng đầu năm 2023,
								hứa hẹn sẽ đem đến khả năng chụp ảnh chuyên nghiệp và hiệu suất vượt trội.', 8,3, 'Android 13', N'MediaTek Dimensity 7200 5G 8 nhân', '4600 mAh, 66w','vvv27.png',1,1 );
insert into ModPhones values(  'Vivo Y100 ', 6.67, N'vivo Y100 mẫu điện thoại tầm trung với nhiều nâng cấp đáng giá, được vivo giới thiệu tại thị trường Việt Nam. Lần ra mắt này hãng đem đến một sản phẩm với thiết kế đẹp mắt, màn hình sắc nét và hiệu năng ổn định với nhiều tác vụ,
								hứa hẹn đem đến cho bạn trải nghiệm di động đỉnh cao.', 8,3, 'Android 14', N'Snapdragon 685 8 nhân', '5000 mAh, 80w','vvy100.png',1,1 );
insert into ModPhones values(  'Vivo Y03 ', 6.56, N'vivo Y03 64GB - phiên bản điện thoại vừa hấp dẫn lại vừa phù hợp với túi tiền, được vivo giới thiệu tại Việt Nam. Không chỉ toát lên nét mới mẻ và bắt mắt hơn các sản phẩm trước, chiếc smartphone này còn đi kèm với 
								những cải tiến đáng kể về cấu hình cũng như viên pin lớn 5000 mAh.', 4,3, 'Android 14', N'MediaTek Helio G85', '5000 mAh, 15w','vvy03.png',1,1 );
insert into ModPhones values(  'Vivo Y36 ', 6.64, N'vivo Y36 128GB là một trong những sản phẩm điện thoại thông minh nổi bật và đáng chú ý của thương hiệu vivo. Với những tính năng và thông số kỹ thuật vượt trội, vivo Y36 hứa hẹn mang đến cho người dùng trải nghiệm di
								động đỉnh cao.', 8,3, 'Android 13', N'Snapdragon 680', '5000 mAh, 44w','vvy36.png',1,1 );
insert into ModPhones values(  'Vivo Y35 ', 6.58, N'vivo Y35 là một chiếc điện thoại tầm trung đáng chú ý được ra mắt vào tháng 10/2022, máy nổi bật nhờ sở hữu thiết kế đẹp, khả năng sạc nhanh cùng cấu hình ổn trong phân khúc, ngoài ra camera với độ phân giải lên
								đến 50 MP cũng là điểm cộng dành cho chiếc máy này.', 8,3, 'Android 12', N'Snapdragon 680', '5000 mAh, 44w','vvy35.png',1,1 );
insert into ModPhones values(  'Vivo T1 ', 6.44, N'Ngay từ khi công bố thông số kỹ thuật đầy đủ cùng mức giá bán, Vivo T1 5G bỗng dưng trở thành cái tên được cộng đồng game thủ nhắc đến rất nhiều nhờ có hiệu năng cực cao nhưng giá thành trang bị lại cực kỳ hợp lý. 
								Đi kèm với đó là nhiều công nghệ tối ưu game tân tiến giúp quá trình chơi game của bạn được diễn ra mượt mà.', 8,3, 'Android 12', N'Snapdragon 778G 5G', '4700 mAh, 66w','vvt1.png',1,1 );

-- MOD PHONE OPPO
insert into ModPhones values(  'OPPO Find N3', 7.82, N'OPPO chính thức giới thiệu sản phẩm OPPO Find N3 5G, một chiếc điện thoại thông minh với thiết kế gập ngang hoàn toàn hiện đại và đẳng cấp, nổi bật với camera và hiệu năng đứng đầu.
								Đây là một bước đột phá của OPPO trong việc kết hợp sự tiện ích và thẩm mỹ tối ưu, đem lại trải nghiệm độc đáo cho người dùng.', 16,4, 'Android 13', N'Snapdragon 8 Gen 2 8 nhân', '4805 mAh, 67w','opfn3.png',1,1 );
insert into ModPhones values(  'OPPO Find N3 Flip', 6.8, N'OPPO Find N3 Flip 5G Hồng được OPPO cho ra mắt chính thức tại thị trường Việt Nam vào tháng 10/2023. Sản phẩm được hãng đầu tư mạnh mẽ về camera với độ phân giải lên đến 50 MP, cấu hình sử dụng chip
								Dimensity 9200 5G và thiết kế được thay đổi với bản lề gập mở tốt hơn cùng màu hồng sang trọng và nữ tính.', 12,4, 'Android 13', N'MediaTek Dimensity 9200 5G 8 nhân', '4300 mAh, 44w','opfn3f.png',1,1 );
insert into ModPhones values(  'OPPO Find N2 Flip', 6.8, N'OPPO Find N2 Flip 5G - chiếc điện thoại gập đầu tiên của OPPO đã được giới thiệu chính thức tại Việt Nam vào tháng 03/2023. Sở hữu cấu hình mạnh mẽ cùng thiết kế siêu nhỏ gọn giúp tối ưu kích thước, 
								chiếc điện thoại sẽ cùng bạn nổi bật trong mọi không gian với vẻ ngoài đầy cá tính.', 8,4, 'Android 13', N'MediaTek Dimensity 9000+ 8 nhân', '4300 mAh, 44w','opfn2f.png',1,1 );
insert into ModPhones values(  'OPPO Find X5 Pro', 6.7, N'OPPO Find X5 Pro 5G có lẽ là cái tên sáng giá được xướng tên trong danh sách điện thoại có thiết kế ấn tượng trong năm 2022. Máy được hãng cho ra mắt với một diện mạo độc lạ chưa từng có, cùng với đó 
								là những nâng cấp về chất lượng ở camera nhờ sự hợp tác với nhà sản xuất máy ảnh Hasselblad. ', 12,4, 'Android 12', N'Snapdragon 8 Gen 1', '5000 mAh, 80w','opx5.png',1,1 );
insert into ModPhones values(  'OPPO Reno11 F', 6.7, N'OPPO Reno11 F 5G là một chiếc điện thoại tầm trung mới được OPPO ra mắt trong thời gian gần đây. Máy sở hữu nhiều ưu điểm nổi bật như thiết kế trẻ trung, màn hình đẹp, hiệu năng mạnh mẽ nhờ chip Dimensity 7050 5G,
								hứa hẹn mang đến trải nghiệm tốt khi sử dụng.', 8,4, 'Android 14', N'MediaTek Dimensity 7050 5G 8 nhân', '5000 mAh, 67w','opr11f.png',1,1 );
insert into ModPhones values(  'OPPO Reno11 Pro', 6.7, N'OPPO Reno11 F 5G là một chiếc điện thoại tầm trung mới được OPPO ra mắt trong thời gian gần đây. Máy sở hữu nhiều ưu điểm nổi bật như thiết kế trẻ trung, màn hình đẹp, hiệu năng mạnh mẽ nhờ chip Dimensity 7050 5G,
								hứa hẹn mang đến trải nghiệm tốt khi sử dụng.', 12,4, 'Android 14', N'MediaTek Dimensity 8200 5G 8 nhân', '4600 mAh, 80w','opr11p.png',1,1 );
insert into ModPhones values(  'OPPO Reno11', 6.7, N'OPPO Reno11 5G tiếp tục mang đến sự hấp dẫn cho người dùng, lấy cảm hứng từ những thành công trước đó. Điểm độc đáo của chiếc điện thoại nằm ở thiết kế thu hút, cấu hình mạnh mẽ và khả năng chụp ảnh ấn tượng. 
								Được tạo ra để đáp ứng một loạt các nhu cầu từ giải trí, nhiếp ảnh đến công việc đòi hỏi hiệu năng cao.', 8,4, 'Android 14', N'MediaTek Dimensity 7050 5G 8 nhân', '5000 mAh, 67w','opr11p.png',1,1 );
insert into ModPhones values(  'OPPO Reno10 Pro+', 6.74, N'OPPO Reno10 Pro+ 5G là một sản phẩm tiếp nối sự thành công của thế hệ trước đó, với thiết kế đẹp mắt, cấu hình mạnh mẽ và máy ảnh chất lượng cao. Máy đáp ứng được nhu cầu giải trí, chụp ảnh và làm việc của người dùng, 
								là lựa chọn hoàn hảo cho những ai đang tìm kiếm một chiếc điện thoại đa năng và hiện đại.', 12,4, 'Android 13', N'Snapdragon 8+ Gen 1', '4700 mAh, 100w','opr10pp.png',1,1 );
insert into ModPhones values(  'OPPO Reno10 Pro', 6.7, N'OPPO Reno10 Pro 5G là một trong những sản phẩm của OPPO được ra mắt trong 2023. Với thiết kế đẹp mắt, màn hình lớn và hiệu năng mạnh mẽ, Reno10 Pro chắc chắn sẽ là lựa chọn đáng cân nhắc dành cho
								những ai đang tìm kiếm chiếc máy tầm trung để phục vụ tốt mọi nhu cầu.', 12,4, 'Android 13', N'Snapdragon 778G 5G', '4600 mAh, 80w','opr10p.png',1,1 );
insert into ModPhones values(  'OPPO Reno10', 6.7, N'Là một trong những chiếc smartphone mới nhất của OPPO trên thị trường hiện nay, OPPO Reno10 5G mang trên mình bộ áo đẹp mắt, hiệu năng ổn định đi cùng với đó là khả năng nhiếp ảnh vượt trội, 
								đáp ứng mượt mà hầu hết các nhu cầu của người dùng.', 8,4, 'Android 13', N'MediaTek Dimensity 7050 5G 8 nhân', '5000 mAh, 67w','opr10.png',1,1 );
insert into ModPhones values(  'OPPO A79', 6.72, N'OPPO trình làng mẫu điện thoại tầm trung với tên gọi là OPPO A79 5G. Được thiết kế với mặt lưng họa tiết độc đáo không chỉ mang đến vẻ hiện đại mà còn tôn lên sự sang trọng. Điều đặc sắc của sản phẩm là khả năng chụp ảnh và hiệu suất, 
								đưa tên tuổi của OPPO lên vị thế mới trong làng điện thoại.', 8,4, 'Android 13', N'MediaTek Dimensity 6020 5G 8 nhân', '5000 mAh, 33w','opa79.png',1,1 );
insert into ModPhones values(  'OPPO A98', 6.72, N'Những mẫu điện thoại OPPO cho ra mắt thời gian gần đây (2023) có vẻ ngoài đẹp mắt phù hợp với thị hiếu người tiêu dùng hiện nay. Trong đó OPPO A98 5G mẫu điện thoại mới của điện thoại OPPO A, với lối thiết kế hiện đại, màn hình hiển thị chi
								tiết thông tin cũng như một hiệu năng ổn định.', 8,4, 'Android 13', N'Snapdragon 695 5G', '5000 mAh, 67w','opa98.png',1,1 );
insert into ModPhones values(  'OPPO A78 ', 6.43, N'OPPO A78 một sản phẩm được nhà OPPO cho ra mắt với thiết kế trẻ trung, thiết bị này được đánh giá có hiệu năng ổn định, màn hình sắc nét và viên pin có dung lượng lớn,
								phù hợp cho người dùng sử dụng lâu dài.', 8,4, 'Android 13', N'Snapdragon 680', '5000 mAh, 67w','opa78.png',1,1 );

-- MOD PHONE XIAOMI
insert into ModPhones values(  'Xiaomi 14 Ultra', 6.73, N'Xiaomi Redmi Note 11 Pro 4G mang trong mình khá nhiều những nâng cấp cực kì sáng giá. Là chiếc điện thoại có màn hình lớn, tần số quét 120 Hz,
								hiệu năng ổn định cùng một viên pin siêu trâu.', 6,5, 'Android 11', N'Snapdragon 695 5G', '4500 mAh, 120w','xirn11pp.png',1,1 );
insert into ModPhones values(  'Xiaomi 14', 6.36, N'Xiaomi 14 được ra mắt với tâm hướng mang đến những trải nghiệm mới mẻ và chất lượng. Như một lá cờ đầu trong ngành công nghệ, điện thoại không chỉ có thiết kế đẹp mà còn ấn tượng về màn hình,
								cấu hình mạnh mẽ, máy ảnh chất lượng và pin có thời gian sử dụng lâu dài.', 12,5, 'Android 14', N'Snapdragon 8 Gen 3', '4610 mAh, 90w','xi14.png',1,1 );
insert into ModPhones values(  'Xiaomi 13T Pro ', 6.67, N'Xiaomi 13T Pro 5G là mẫu máy thuộc phân khúc tầm trung đáng chú ý tại thị trường Việt Nam. Điện thoại ấn tượng nhờ được trang bị chip Dimensity 9200+,
								camera 50 MP có kèm sự hợp tác với Leica cùng kiểu thiết kế tinh tế đầy sang trọng.', 12,5, 'Android 13', N'MediaTek Dimensity 9200+ 5G 8 nhân', '5000 mAh, 120w','xi13tp.png',1,1 );
insert into ModPhones values(  'Xiaomi Redmi Note 13 Pro+', 6.67, N'Xiaomi tiếp tục cho ra mắt một chiếc điện thoại tầm trung mới mang tên gọi Xiaomi Redmi Note 13 Pro+ 5G. Sản phẩm được chăm chút với thiết kế trang nhã và độc đáo, 
								không chỉ mang lại vẻ đẹp hiện đại mà còn nâng cao đẳng cấp sang trọng. Điểm đặc biệt nổi bật của sản phẩm là khả năng hiển thị và hiệu suất mạnh mẽ, tạo ra trải nghiệm sử dụng tối ưu.', 8,5, 'Android 13', N'MediaTek Dimensity 7200 Ultra', '5000 mAh, 120w','xi13pp.png',1,1 );
insert into ModPhones values(  'Xiaomi Redmi Note 13 Pro', 6.67, N'Xiaomi Redmi Note 13 Pro 5G khi ra mắt đã tạo được ấn tượng đối với người dùng nhờ được trang bị chip Snapdragon 7s Gen 2, camera 200 MP và sạc nhanh 67 W.
								Đây được xem là những thông số nổi trội trong phân khúc, hứa hẹn mang đến những trải nghiệm tốt vượt ngoài mong đợi.', 8,5, 'Android 13', N'Snapdragon 7s Gen 2 8 nhân', '5100 mAh, 67w','xi13p.png',1,1 );
insert into ModPhones values(  'Xiaomi 12T Pro', 6.67, N'Cuối cùng Xiaomi 12T Pro 5G cũng đã chính thức lộ diện trên thị trường sau hàng loạt thông tin rò rỉ về thông số, đúng như dự đoán thì độ phân giải trên camera của phiên bản này được nhà sản xuất nâng cấp lên đến 200 MP, 
								giúp máy trở thành thiết bị có khả năng ghi hình sắc nét thuộc top đầu giới smartphone, đi kèm với đó là màn hình chất lượng cùng bộ vi xử lý mạnh mẽ xứng tầm flagship.', 12,5, 'Android 12', N'Snapdragon 8+ Gen 1', '5000 mAh, 120w','xi12tp.png',1,1 );
insert into ModPhones values(  'Xiaomi 12T', 6.67, N'Xiaomi 12T series đã ra mắt trong sự kiện của Xiaomi vào ngày 4/10, trong đó có Xiaomi 12T 5G 128GB - máy sở hữu nhiều công nghệ hàng đầu trong giới smartphone tiêu biểu như: Chipset mạnh mẽ đến từ MediaTek, 
								camera 108 MP sắc nét cùng khả năng sạc 120 W siêu nhanh.', 8,5, 'Android 12', N'MediaTek Dimensity 8100 Ultra 8 nhân', '5000 mAh, 120w','xi12t.png',1,1 );
insert into ModPhones values(  ' Xiaomi Redmi A2', 6.52, N'Xiaomi Redmi A2 chiếc điện thoại giá rẻ trên thị trường nhưng không vì thế mà nó kém cạnh về hiệu năng và tính năng. Với chip Helio G36, màn hình 6.52 inch, pin 5000 mAh. 
								Máy sẽ là một sự lựa chọn tuyệt vời cho những người muốn có một chiếc smartphone đơn giản nhưng hiệu quả.', 2,5, 'Android 13', N'MediaTek Helio G36 8 nhân', '5000 mAh, 10w','xira2.png',1,1 );
insert into ModPhones values(  ' Xiaomi Redmi A2+', 6.52, N'Xiaomi Redmi A2+ chiếc điện thoại được nhà Xiaomi tung ra thị trường Việt Nam trong thời gian 05/2023. Máy mang trong mình hiệu năng ổn định với các tác vụ đơn giản, 
								viên pin lớn cùng hệ thống camera mang đến khả năng chụp ổn định.', 3,5, 'Android 13', N'MediaTek Helio G36 8 nhân', '5000 mAh, 10w','xira2p.png',1,1 );
insert into ModPhones values(  ' Xiaomi Redmi Note 11', 6.43, N'Redmi Note 11 (6GB/128GB) vừa được Xiaomi cho ra mắt, được xem là chiếc smartphone có giá tầm trung ấn tượng, với 1 cấu hình mạnh, cụm camera xịn sò, pin khỏe,
								sạc nhanh mà giá lại rất phải chăng.', 6,5, 'Android 11', N'Snapdragon 680', '5000 mAh, 33w','xirn11.png',1,1 );
insert into ModPhones values(  'Xiaomi Redmi Note 11 Pro', 6.67, N'Xiaomi Redmi Note 11 Pro 4G mang trong mình khá nhiều những nâng cấp cực kì sáng giá. Là chiếc điện thoại có màn hình lớn, tần số quét 120 Hz,
								hiệu năng ổn định cùng một viên pin siêu trâu.', 8,5, 'Android 11', N'MediaTek Helio G96', '5000 mAh, 67w','xirn11p.png',1,1 );
insert into ModPhones values(  'Xiaomi Redmi Note 11 Pro+', 6.67, N'Xiaomi Redmi Note 11 Pro 4G mang trong mình khá nhiều những nâng cấp cực kì sáng giá. Là chiếc điện thoại có màn hình lớn, tần số quét 120 Hz,
								hiệu năng ổn định cùng một viên pin siêu trâu.', 6,5, 'Android 11', N'Snapdragon 695 5G', '4500 mAh, 120w','xirn11pp.png',1,1 );

-- MOD PHONE HAUWEI
insert into ModPhones values(  'HUAWEI Mate 30 Pro', 6.53, N'Những năm gần đây thì Huawei luôn mang tới cho người dùng sự bất ngờ với những trang bị đột phá lần đầu tiên xuất hiện trên chiếc smartphone của mình và
								mới đây chiếc Huawei Mate 30 Pro đã chính thức ra mắt và nó vẫn mang trong mình rất nhiều công nghệ mang tính đột phá của Huawei.', 8,6, 'EMUI 10', N'Kirin 990', '4500 mAh','hwm30pro.png',1,1 );
insert into ModPhones values(  'HUAWEI Mate 20 Pro', 6.39, N'Thế hệ siêu phẩm mới của Huawei chính thức lộ diện với cái tên Huawei Mate 20 Pro, chiếc điện thoại thu hút trong thiết kế, mạnh mẽ trong hiệu năng cùng một hệ thống 
								camera ấn tượng.', 6,6, 'Android 9', N'Kirin 990', '4200 mAh','hwm20pro.png',1,1 );
insert into ModPhones values(  'HUAWEI Mate 20X', 7.2, N'Huawei Mate 20 X là mẫu smartphone với cấu hình cực khủng và hướng trực tiếp vào
								đối tượng khách hàng game thủ.', 6,6, 'Android 9', N'Kirin 980', '5000 mAh','hwm20x.png',1,1 );
insert into ModPhones values(  'HUAWEI Mate 20', 6.5, N'Huawei Mate 20 là chiếc flagship mới được Huawei ra mắt với điểm nhấn tới từ 3 camera ở mặt lưng và chất lượng chụp ảnh 
								thuộc hàng tốt nhất thế giới hiện nay.', 6,6, 'Android 9', N'Kirin 980', '4000 mAh','hwm20.png',1,1 );
insert into ModPhones values(  'Huawei P40 Pro+', 6.58, N'Huawei P40 Pro Plus là siêu phẩm cao cấp nhất trong bộ ba flagship vừa được Huawei ra mắt vào cuối tháng 3/2020. Máy có một màn hình tràn cạnh ấn tượng, 
								cấu hình khủng, đặc biệt cụm camera zoom xa 100x vượt ngoài mọi mong đợi.', 8,6, 'EMUI 10', N'Kirin 990 5G', '4200 mAh','hwp40prop.png',1,1 );
insert into ModPhones values(  'Huawei P40 Pro+', 6.58, N'Huawei P40 Pro Plus là siêu phẩm cao cấp nhất trong bộ ba flagship vừa được Huawei ra mắt vào cuối tháng 3/2020. Máy có một màn hình tràn cạnh ấn tượng, 
								cấu hình khủng, đặc biệt cụm camera zoom xa 100x vượt ngoài mọi mong đợi.', 8,6, 'EMUI 10', N'Kirin 990', '4200 mAh','hwp40pro.png',1,1 );
insert into ModPhones values(  'Huawei P30 Pro', 6.47, N'Huawei P30 Pro là một bước đột phá của Huawei cũng như camera trên smartphone
								khi đem lại khả năng zoom như một "kính viễn vọng".', 8,6, 'Android 9 (Pie)', N'Kirin 980', '4200 mAh','hwp30pro.png',1,1 );
insert into ModPhones values(  'Huawei P30', 6.1, N'Huawei P30 là chiếc smartphone cao cấp vừa được Huawei giới thiệu với thiết kế tuyệt đẹp,
								hiệu năng mạnh mẽ và thiết lập camera ấn tượng.', 8,6, 'Android 9 (Pie)', N'Kirin 980', '3650 mAh','hwp30.png',1,1 );
insert into ModPhones values(  'Huawei Nova 7i', 6.4, N'Sau thành công dòng sản phẩm Nova 3i, Nova 5i, Huawei tiếp tục cho ra mắt người kế nhiệm mang tên Huawei Nova 7i với nhiều đột phá về cấu hình, thiết kế và camera. 
								Đi kèm với giá thành phải chăng, thiết bị hứa hẹn tạo nên cơn sốt điện thoại cho năm 2020.', 8,6, 'EMUI 10', N'Kirin 810', '4200 mAh, 40 W','hwn7i.png',1,1 );
insert into ModPhones values(  'Huawei Nova 5T', 6.25, N'Huawei Nova 5T là mẫu smartphone có cấu hình mạnh mẽ, thiết kế thời trang, đánh mạnh vào khâu chụp ảnh selfie với camera 32 MP,
								nhưng lại có giá bán rất cạnh tranh.', 8,6, 'Android 9 (Pie)', N'Kirin 980', '3750 mAh','hwn5t.png',1,1 );
insert into ModPhones values(  'Huawei Nova 3i', 6.3, N'Với những smartphone như Nova 2i hay Nova 3e thì Huawei đã và đang tạo nên những cơn sốt rất lớn trong phân khúc tầm trung và cái tên mới
								Huawei Nova 3i được cải tiến và nâng cấp nhiều điểm mới, hứa hẹn sẽ mang lại làn gió mới cho thị trường.', 4,6, 'EMUI 9', N'Kirin 710', '3340 mAh','hwn3i.png',1,1 );
													
-- IPHONE 15 ID: 1 -> 15
insert into Phones values('iPhone 15 128GB','1512804000001',4,21299000,10,'black',128)
insert into Phones values('iPhone 15 128GB','1512804000002',4,21299000,10,'green',128)
insert into Phones values('iPhone 15 128GB','1512804000003',4,21299000,10,'pink',128)
insert into Phones values('iPhone 15 128GB','1512804000004',4,21299000,10,'blue',128)
insert into Phones values('iPhone 15 128GB','1512804000005',4,21299000,10,'yellow',128)

insert into Phones values('iPhone 15 256GB','1525604000001',4,24299000,10,'black',256)
insert into Phones values('iPhone 15 256GB','1525604000002',4,24299000,10,'green',256)
insert into Phones values('iPhone 15 256GB','1525604000003',4,24299000,10,'pink',256)
insert into Phones values('iPhone 15 256GB','1525604000004',4,24299000,10,'blue',256)
insert into Phones values('iPhone 15 256GB','1525604000005',4,24299000,10,'yellow',256)

insert into Phones values('iPhone 15 512GB','1551204000001',4,29399000,10,'black',512)
insert into Phones values('iPhone 15 512GB','1551204000002',4,29399000,10,'green',512)
insert into Phones values('iPhone 15 512GB','1551204000003',4,29399000,10,'pink',512)
insert into Phones values('iPhone 15 512GB','1551204000004',4,29399000,10,'blue',512)
insert into Phones values('iPhone 15 512GB','1551204000005',4,29399000,10,'yellow',512)

-- IPHONE 15 PLUS: 16 -> 30
insert into Phones values('iPhone 15 Plus 128GB','1512803000001',3,24299000,10,'pink',128)
insert into Phones values('iPhone 15 Plus 128GB','1512803000002',3,24299000,10,'green',128)
insert into Phones values('iPhone 15 Plus 128GB','1512803000003',3,24299000,10,'blue',128)
insert into Phones values('iPhone 15 Plus 128GB','1512803000004',3,24299000,10,'black',128)
insert into Phones values('iPhone 15 Plus 128GB','1512803000005',3,24299000,10,'yellow',128)

insert into Phones values('iPhone 15 Plus 256GB','1525603000001',3,25899000,10,'pink',256)
insert into Phones values('iPhone 15 Plus 256GB','1525603000002',3,25899000,10,'green',256)
insert into Phones values('iPhone 15 Plus 256GB','1525603000003',3,25899000,10,'blue',256)
insert into Phones values('iPhone 15 Plus 256GB','1525603000004',3,25899000,10,'black',256)
insert into Phones values('iPhone 15 Plus 256GB','1525603000005',3,24299000,10,'yellow',256)

insert into Phones values('iPhone 15 Plus 512GB','1551203000001',3,27899000,10,'pink',512)
insert into Phones values('iPhone 15 Plus 512GB','1551203000002',3,27899000,10,'green',512)
insert into Phones values('iPhone 15 Plus 512GB','1551203000003',3,27899000,10,'blue',512)
insert into Phones values('iPhone 15 Plus 512GB','1551203000004',3,27899000,10,'black',512)
insert into Phones values('iPhone 15 Plus 512GB','1551203000005',3,27899000,10,'yellow',512)
--IPHONE 15 PRO: 31 -> 46
insert into Phones values('iPhone 15 Pro 128GB','1512802000001',2,26799000,10,'black',128)
insert into Phones values('iPhone 15 Pro 128GB','1512802000002',2,26799000,10,'white',128)
insert into Phones values('iPhone 15 Pro 128GB','1512802000003',2,26799000,10,'blue',128)
insert into Phones values('iPhone 15 Pro 128GB','1512802000004',2,26799000,10,'natural',128)

insert into Phones values('iPhone 15 Pro 256GB','1525602000001',2,29499000,10,'black',256)
insert into Phones values('iPhone 15 Pro 256GB','1525602000002',2,29499000,10,'white',256)
insert into Phones values('iPhone 15 Pro 256GB','1525602000003',2,29499000,10,'blue',256)
insert into Phones values('iPhone 15 Pro 256GB','1525602000004',2,29499000,10,'natural',256)

insert into Phones values('iPhone 15 Pro 512B','1551202000001',2,35899000,10,'black',512)
insert into Phones values('iPhone 15 Pro 512B','1551202000002',2,35899000,10,'white',512)
insert into Phones values('iPhone 15 Pro 512B','1551202000003',2,35899000,10,'blue',512)
insert into Phones values('iPhone 15 Pro 512B','1551202000004',2,35899000,10,'natural',512)

insert into Phones values('iPhone 15 Pro 1TB','1500102000001',2,39499000,10,'black',1024)
insert into Phones values('iPhone 15 Pro 1TB','1500102000002',2,39499000,10,'white',1024)
insert into Phones values('iPhone 15 Pro 1TB','1500102000003',2,39499000,10,'blue',1024)
insert into Phones values('iPhone 15 Pro 1TB','1500102000004',2,39499000,10,'natural',1024)
--IPHONE 15 PRO MAX: 47 ->  58
insert into Phones values('iPhone 15 Pro Max 256GB','1525601000001',1,31999000,10,'black',256)
insert into Phones values('iPhone 15 Pro Max 256GB','1525601000002',1,31999000,10,'white',256)
insert into Phones values('iPhone 15 Pro Max 256GB','1525601000003',1,31999000,10,'blue',256)
insert into Phones values('iPhone 15 Pro Max 256GB','1525601000004',1,31999000,10,'natural',256)

insert into Phones values('iPhone 15 Pro Max 512B','1551201000001',1,37699000,10,'black',512)
insert into Phones values('iPhone 15 Pro Max 512B','1551201000002',1,37699000,10,'white',512)
insert into Phones values('iPhone 15 Pro Max 512B','1551201000003',1,37699000,10,'blue',512)
insert into Phones values('iPhone 15 Pro Max 512B','1551201000004',1,37699000,10,'natural',512)

insert into Phones values('iPhone 15 Pro Max 1TB','1500101000001',1,43499000,10,'black',1024)
insert into Phones values('iPhone 15 Pro Max 1TB','1500101000002',1,43499000,10,'white',1024)
insert into Phones values('iPhone 15 Pro Max 1TB','1500101000003',1,43499000,10,'blue',1024)
insert into Phones values('iPhone 15 Pro Max 1TB','1500101000004',1,43499000,10,'natural',1024)
--IPHONE 14: 59 -> 73
insert into Phones values('iPhone 14 128GB','1412808000001',8,17999000,10,'black',128)
insert into Phones values('iPhone 14 128GB','1412808000002',8,17999000,10,'purple',128)
insert into Phones values('iPhone 14 128GB','1412808000003',8,17999000,10,'yellow',128)
insert into Phones values('iPhone 14 128GB','1412808000004',8,17999000,10,'blue',128)
insert into Phones values('iPhone 14 128GB','1412808000005',8,17999000,10,'white',128)

insert into Phones values('iPhone 14 256GB','1425608000001',8,21799000,10,'black',256)
insert into Phones values('iPhone 14 256GB','1425608000002',8,21799000,10,'purple',256)
insert into Phones values('iPhone 14 256GB','1425608000003',8,21799000,10,'yellow',256)
insert into Phones values('iPhone 14 256GB','1425608000004',8,21799000,10,'blue',256)
insert into Phones values('iPhone 14 256GB','1425608000005',8,21799000,10,'white',256)

insert into Phones values('iPhone 14 512GB','1451208000001',8,21999000,10,'black',512)
insert into Phones values('iPhone 14 512GB','1451208000002',8,21999000,10,'purple',512)
insert into Phones values('iPhone 14 512GB','1451208000003',8,21999000,10,'yellow',512)
insert into Phones values('iPhone 14 512GB','1451208000004',8,21999000,10,'blue',512)
insert into Phones values('iPhone 14 512GB','1451208000005',8,21999000,10,'white',512)

--IPHONE 14 Plus: 74 -> 88
insert into Phones values('iPhone 14 Plus 128GB','1412807000001',7,19399000,10,'black',128)
insert into Phones values('iPhone 14 Plus 128GB','1412807000002',7,19399000,10,'purple',128)
insert into Phones values('iPhone 14 Plus 128GB','1412807000003',7,19399000,10,'blue',128)
insert into Phones values('iPhone 14 Plus 128GB','1412807000004',7,19399000,10,'white',128)
insert into Phones values('iPhone 14 Plus 128GB','1412811000005',7,19399000,10,'yellow',128)

insert into Phones values('iPhone 14 Plus 256GB','1425607000001',7,23399000,10,'black',256)
insert into Phones values('iPhone 14 Plus 256GB','1425607000002',7,23399000,10,'purple',256)
insert into Phones values('iPhone 14 Plus 256GB','1425607000003',7,23399000,10,'blue',256)
insert into Phones values('iPhone 14 Plus 256GB','1425607000004',7,23399000,10,'white',256)
insert into Phones values('iPhone 14 Plus 256GB','1425607000005',7,23399000,10,'yellow',256)

insert into Phones values('iPhone 14 Plus 512GB','1451207000001',7,25399000,10,'black',512)
insert into Phones values('iPhone 14 Plus 512GB','1451207000002',7,25399000,10,'purple',512)
insert into Phones values('iPhone 14 Plus 512GB','1451207000003',7,25399000,10,'blue',512)
insert into Phones values('iPhone 14 Plus 512GB','1451207000004',7,25399000,10,'white',512)
insert into Phones values('iPhone 14 Plus 512GB','1451207000005',7,25399000,10,'yellow',512)
-- IPHONE 14 PRO: 89 -> 104
insert into Phones values('iPhone 14 Pro 128GB','1412806000001',6,23199000,10,'black',128)
insert into Phones values('iPhone 14 Pro 128GB','1412806000002',6,23199000,10,'purple',128)
insert into Phones values('iPhone 14 Pro 128GB','1412806000003',6,23199000,10,'sliver',128)
insert into Phones values('iPhone 14 Pro 128GB','1412806000004',6,23199000,10,'gold',128)

insert into Phones values('iPhone 14 Pro 256GB','1425606000001',6,26399000,10,'black',256)
insert into Phones values('iPhone 14 Pro 256GB','1425606000002',6,26399000,10,'purple',256)
insert into Phones values('iPhone 14 Pro 256GB','1425606000003',6,26399000,10,'sliver',256)
insert into Phones values('iPhone 14 Pro 256GB','1425606000004',6,26399000,10,'gold',256)

insert into Phones values('iPhone 14 Pro 512GB','1451206000001',6,27799000,10,'black',512)
insert into Phones values('iPhone 14 Pro 512GB','1451206000002',6,27799000,10,'purple',512)
insert into Phones values('iPhone 14 Pro 512GB','1451206000003',6,27799000,10,'sliver',512)
insert into Phones values('iPhone 14 Pro 512GB','1451206000004',6,27799000,10,'gold',512)

insert into Phones values('iPhone 14 Pro 1TB','1400106000001',6,28299000,10,'black',1024)
insert into Phones values('iPhone 14 Pro 1TB','1400106000002',6,28299000,10,'purple',1024)
insert into Phones values('iPhone 14 Pro 1TB','1400106000003',6,28299000,10,'sliver',1024)
insert into Phones values('iPhone 14 Pro 1TB','1400106000004',6,28299000,10,'gold',1024)

-- IPHONE 14 PRO MAX: 105 -> 116
insert into Phones values('iPhone 14 Pro Max 128GB','1412805000001',5,26199000,10,'black',128)
insert into Phones values('iPhone 14 Pro Max 128GB','1412805000002',5,26199000,10,'purple',128)
insert into Phones values('iPhone 14 Pro Max 128GB','1412805000003',5,26199000,10,'sliver',128)
insert into Phones values('iPhone 14 Pro Max 128GB','1412805000004',5,26199000,10,'gold',128)

insert into Phones values('iPhone 14 Pro Max 256GB','1425605000001',5,26699000,10,'black',256)
insert into Phones values('iPhone 14 Pro Max 256GB','1425605000002',5,26699000,10,'purple',256)
insert into Phones values('iPhone 14 Pro Max 256GB','1425605000003',5,26699000,10,'sliver',256)
insert into Phones values('iPhone 14 Pro Max 256GB','1425605000004',5,26699000,10,'gold',256)

insert into Phones values('iPhone 14 Pro Max 512GB','1451205000001',5,31899000,10,'black',512)
insert into Phones values('iPhone 14 Pro Max 512GB','1451205000002',5,31899000,10,'purple',512)
insert into Phones values('iPhone 14 Pro Max 512GB','1451205000003',5,31899000,10,'sliver',512)
insert into Phones values('iPhone 14 Pro Max 512GB','1451205000004',5,31899000,10,'gold',512)

insert into Phones values('iPhone 14 Pro Max 1TB','1400105000001',5,35999000,10,'black',1024)
insert into Phones values('iPhone 14 Pro Max 1TB','1400105000002',5,35999000,10,'purple',1024)
insert into Phones values('iPhone 14 Pro Max 1TB','1400105000003',5,35999000,10,'sliver',1024)
insert into Phones values('iPhone 14 Pro Max 1TB','1400105000004',5,35999000,10,'gold',1024)
-- IPHONE 13: 
insert into Phones values('iPhone 13 128GB','1312811000001',11,11999000,10,'pink',128)
insert into Phones values('iPhone 13 128GB','1312811000002',11,11999000,10,'white',128)
insert into Phones values('iPhone 13 128GB','1312811000003',11,11999000,10,'green',128)
insert into Phones values('iPhone 13 128GB','1312811000004',11,11999000,10,'blue',128)
insert into Phones values('iPhone 13 128GB','1312811000005',11,11999000,10,'back',128)

insert into Phones values('iPhone 13 256GB','1325611000001',11,12999000,10,'pink',256)
insert into Phones values('iPhone 13 256GB','1325611000002',11,12999000,10,'white',256)
insert into Phones values('iPhone 13 256GB','1325611000003',11,12999000,10,'green',256)
insert into Phones values('iPhone 13 256GB','1325611000004',11,12999000,10,'blue',256)
insert into Phones values('iPhone 13 256GB','1325611000005',11,12999000,10,'back',256)

insert into Phones values('iPhone 13 512GB','1306411000001',11,13999000,10,'pink',512)
insert into Phones values('iPhone 13 512GB','1306411000002',11,13999000,10,'white',512)
insert into Phones values('iPhone 13 512GB','1306411000003',11,13999000,10,'green',512)
insert into Phones values('iPhone 13 512GB','1306411000004',11,13999000,10,'blue',512)
insert into Phones values('iPhone 13 512GB','1306411000005',11,13999000,10,'back',512)

-- IPHONE 13 PRO
insert into Phones values('iPhone 13 Pro 128GB','1312810000001',10,14999000,10,'sliver',128)
insert into Phones values('iPhone 13 Pro 128GB','1312810000002',10,14999000,10,'green',128)
insert into Phones values('iPhone 13 Pro 128GB','1312810000003',10,14999000,10,'gray',128)
insert into Phones values('iPhone 13 Pro 128GB','1312810000004',10,14999000,10,'gold',128)
insert into Phones values('iPhone 13 Pro 128GB','1312810000005',10,14999000,10,'blue',128)

insert into Phones values('iPhone 13 Pro 256GB','1325610000001',10,15999000,10,'sliver',256)
insert into Phones values('iPhone 13 Pro 256GB','1325610000002',10,15999000,10,'green',256)
insert into Phones values('iPhone 13 Pro 256GB','1325610000003',10,15999000,10,'gray',256)
insert into Phones values('iPhone 13 Pro 256GB','1325610000004',10,15999000,10,'gold',256)
insert into Phones values('iPhone 13 Pro 256GB','1325610000005',10,15999000,10,'blue',256)

insert into Phones values('iPhone 13 Pro 512GB','1351210000001',10,16999000,10,'sliver',512)
insert into Phones values('iPhone 13 Pro 512GB','1351210000002',10,16999000,10,'green',512)
insert into Phones values('iPhone 13 Pro 512GB','1351210000003',10,16999000,10,'gray',512)
insert into Phones values('iPhone 13 Pro 512GB','1351210000004',10,16999000,10,'gold',512)
insert into Phones values('iPhone 13 Pro 512GB','1351210000005',10,16999000,10,'blue',512)

insert into Phones values('iPhone 13 Pro 1TB','1300110000001',10,17999000,10,'sliver',1024)
insert into Phones values('iPhone 13 Pro 1TB','1300110000002',10,17999000,10,'green',1024)
insert into Phones values('iPhone 13 Pro 1TB','1300110000003',10,17999000,10,'gray',1024)
insert into Phones values('iPhone 13 Pro 1TB','1300110000004',10,17999000,10,'gold',1024)
insert into Phones values('iPhone 13 Pro 1TB','1300110000005',10,17999000,10,'blue',1024)

-- IPHONE 13 PRO MAX
insert into Phones values('iPhone 13 Pro Max 128GB','1312809000001',9,16499000,10,'sliver',128)
insert into Phones values('iPhone 13 Pro Max 128GB','1312809000002',9,16499000,10,'green',128)
insert into Phones values('iPhone 13 Pro Max 128GB','1312809000003',9,16499000,10,'gray',128)
insert into Phones values('iPhone 13 Pro Max 128GB','1312809000004',9,16499000,10,'gold',128)
insert into Phones values('iPhone 13 Pro Max 128GB','1312809000005',9,16499000,10,'blue',128)

insert into Phones values('iPhone 13 Pro Max 256GB','1325609000001',9,17499000,10,'sliver',256)
insert into Phones values('iPhone 13 Pro Max 256GB','1325609000002',9,17499000,10,'green',256)
insert into Phones values('iPhone 13 Pro Max 256GB','1325609000003',9,17499000,10,'gray',256)
insert into Phones values('iPhone 13 Pro Max 256GB','1325609000004',9,17499000,10,'gold',256)
insert into Phones values('iPhone 13 Pro Max 256GB','1325609000005',9,17499000,10,'blue',256)

insert into Phones values('iPhone 13 Pro Max 512GB','1351209000001',9,18499000,10,'sliver',512)
insert into Phones values('iPhone 13 Pro Max 512GB','1351209000002',9,18499000,10,'green',512)
insert into Phones values('iPhone 13 Pro Max 512GB','1351209000003',9,18499000,10,'gray',512)
insert into Phones values('iPhone 13 Pro Max 512GB','1351209000004',9,18499000,10,'gold',512)
insert into Phones values('iPhone 13 Pro Max 512GB','1351209000005',9,18499000,10,'blue',512)

insert into Phones values('iPhone 13 Pro Max 1TB','1300109000001',9,19499000,10,'sliver',1024)
insert into Phones values('iPhone 13 Pro Max 1TB','1300109000002',9,19499000,10,'green',1024)
insert into Phones values('iPhone 13 Pro Max 1TB','1300109000003',9,19499000,10,'gray',1024)
insert into Phones values('iPhone 13 Pro Max 1TB','1300109000004',9,19499000,10,'gold',1024)
insert into Phones values('iPhone 13 Pro Max 1TB','1300109000005',9,19499000,10,'blue',1024)
-- IPHONE 12
insert into Phones values('iPhone 12 64GB','1206414000001',14,7999000,10,'black',64)
insert into Phones values('iPhone 12 64GB','1206414000002',14,7999000,10,'white',64)
insert into Phones values('iPhone 12 64GB','1206414000003',14,7999000,10,'green',64)
insert into Phones values('iPhone 12 64GB','1206414000004',14,7999000,10,'purple',64)
insert into Phones values('iPhone 12 64GB','1206414000005',14,7999000,10,'blue',64)
insert into Phones values('iPhone 12 64GB','1206414000006',14,7999000,10,'red',64)

insert into Phones values('iPhone 12 128GB','1212814000001',14,8999000,10,'black',128)
insert into Phones values('iPhone 12 128GB','1212814000002',14,8999000,10,'white',128)
insert into Phones values('iPhone 12 128GB','1212814000003',14,8999000,10,'green',128)
insert into Phones values('iPhone 12 128GB','1212814000004',14,8999000,10,'purple',128)
insert into Phones values('iPhone 12 128GB','1212814000005',14,8999000,10,'blue',128)
insert into Phones values('iPhone 12 128GB','1212814000006',14,8999000,10,'red',128)

insert into Phones values('iPhone 12 256GB','1225614000001',14,9999000,10,'black',256)
insert into Phones values('iPhone 12 256GB','1225614000002',14,9999000,10,'white',256)
insert into Phones values('iPhone 12 256GB','1225614000003',14,9999000,10,'green',256)
insert into Phones values('iPhone 12 256GB','1225614000004',14,9999000,10,'purple',256)
insert into Phones values('iPhone 12 256GB','1225614000005',14,9999000,10,'blue',256)
insert into Phones values('iPhone 12 256GB','1225614000006',14,9999000,10,'red',256)

-- IPHONE 12 PRO 
insert into Phones values('iPhone 12 Pro 128GB','1206413000001',13,10099000,10,'gold',128)
insert into Phones values('iPhone 12 Pro 128GB','1206413000002',13,10099000,10,'sliver',128)
insert into Phones values('iPhone 12 Pro 128GB','1206413000003',13,10099000,10,'gray',128)
insert into Phones values('iPhone 12 Pro 128GB','1206413000004',13,10099000,10,'blue',128)

insert into Phones values('iPhone 12 Pro 256GB','1212813000001',13,10899000,10,'gold',256)
insert into Phones values('iPhone 12 Pro 256GB','1212813000002',13,10899000,10,'sliver',256)
insert into Phones values('iPhone 12 Pro 256GB','1212813000003',13,10899000,10,'gray',256)
insert into Phones values('iPhone 12 Pro 256GB','1212813000004',13,10899000,10,'blue',256)

insert into Phones values('iPhone 12 Pro 512GB','1225613000001',13,11890000,10,'gold',512)
insert into Phones values('iPhone 12 Pro 512GB','1225613000002',13,11890000,10,'sliver',512)
insert into Phones values('iPhone 12 Pro 512GB','1225613000003',13,11890000,10,'gray',512)
insert into Phones values('iPhone 12 Pro 512GB','1225613000004',13,11890000,10,'blue',512)

-- IPHONE 12 PRO MAX
insert into Phones values('iPhone 12 Pro Max 128GB','1206412000001',12,12199000,10,'gold',128)
insert into Phones values('iPhone 12 Pro Max 128GB','1206412000002',12,12199000,10,'sliver',128)
insert into Phones values('iPhone 12 Pro Max 128GB','1206412000003',12,12199000,10,'gray',128)
insert into Phones values('iPhone 12 Pro Max 128GB','1206412000004',12,12199000,10,'blue',128)

insert into Phones values('iPhone 12 Pro Max 256GB','1212812000001',12,12999000,10,'gold',256)
insert into Phones values('iPhone 12 Pro Max 256GB','1212812000002',12,12999000,10,'sliver',256)
insert into Phones values('iPhone 12 Pro Max 256GB','1212812000003',12,12999000,10,'gray',256)
insert into Phones values('iPhone 12 Pro Max 256GB','1212812000004',12,12999000,10,'blue',256)

insert into Phones values('iPhone 12 Pro Max 512GB','1225612000001',12,13999000,10,'gold',512)
insert into Phones values('iPhone 12 Pro Max 512GB','1225612000002',12,13999000,10,'sliver',512)
insert into Phones values('iPhone 12 Pro Max 512GB','1225612000003',12,13999000,10,'gray',512)
insert into Phones values('iPhone 12 Pro Max 512GB','1225612000004',12,13999000,10,'blue',512)
-- IPHONE 11 
insert into Phones values('iPhone 11 64GB','1106417000001',17,6199000,17,'black',64)
insert into Phones values('iPhone 11 64GB','1106417000002',17,6199000,17,'white',64)
insert into Phones values('iPhone 11 64GB','1106417000003',17,6199000,17,'green',64)
insert into Phones values('iPhone 11 64GB','1106417000004',17,6199000,17,'purple',64)
insert into Phones values('iPhone 11 64GB','1106417000005',17,6199000,17,'yellow',64)
insert into Phones values('iPhone 11 64GB','1106417000006',17,6199000,17,'red',64)

insert into Phones values('iPhone 11 128GB','1112817000001',17,7199000,17,'black',128)
insert into Phones values('iPhone 11 128GB','1112817000002',17,7199000,17,'white',128)
insert into Phones values('iPhone 11 128GB','1112817000003',17,7199000,17,'green',128)
insert into Phones values('iPhone 11 128GB','1112817000004',17,7199000,17,'purple',128)
insert into Phones values('iPhone 11 128GB','1112817000005',17,7199000,17,'yellow',128)
insert into Phones values('iPhone 11 128GB','1112817000006',17,7199000,17,'red',128)

insert into Phones values('iPhone 11 256GB','1125617000001',17,7999000,17,'black',256)
insert into Phones values('iPhone 11 256GB','1125617000002',17,7999000,17,'white',256)
insert into Phones values('iPhone 11 256GB','1125617000003',17,7999000,17,'green',256)
insert into Phones values('iPhone 11 256GB','1125617000004',17,7999000,17,'purple',256)
insert into Phones values('iPhone 11 256GB','1125617000005',17,7999000,17,'yellow',256)
insert into Phones values('iPhone 11 256GB','1125617000006',17,7999000,17,'red',256)

-- IPHONE 11 PRO
insert into Phones values('iPhone 11 Pro 64GB','1106416000001',16,7799000,16,'gold',64)
insert into Phones values('iPhone 11 Pro 64GB','1106416000002',16,7799000,16,'gray',64)
insert into Phones values('iPhone 11 Pro 64GB','1106416000003',16,7799000,16,'green',64)

insert into Phones values('iPhone 11 Pro 128GB','1112816000001',16,8199000,16,'gold',128)
insert into Phones values('iPhone 11 Pro 128GB','1112816000002',16,8199000,16,'gray',128)
insert into Phones values('iPhone 11 Pro 128GB','1112816000003',16,8199000,16,'green',128)

insert into Phones values('iPhone 11 Pro 256GB','1125616000001',16,8899000,16,'gold',256)
insert into Phones values('iPhone 11 Pro 256GB','1125616000002',16,8899000,16,'gray',256)
insert into Phones values('iPhone 11 Pro 256GB','1125616000003',16,8899000,16,'green',256)

-- IPHONE 11 PRO MAX
insert into Phones values('iPhone 11 Pro Max 64GB','1106415000001',15,9699000,15,'gold',64)
insert into Phones values('iPhone 11 Pro Max 64GB','1106415000002',15,9699000,15,'gray',64)
insert into Phones values('iPhone 11 Pro Max 64GB','1106415000003',15,9699000,15,'green',64)

insert into Phones values('iPhone 11 Pro Max 128GB','1112815000001',15,10899000,15,'gold',128)
insert into Phones values('iPhone 11 Pro Max 128GB','1112815000002',15,10899000,15,'gray',128)
insert into Phones values('iPhone 11 Pro Max 128GB','1112815000003',15,10899000,15,'green',128)

insert into Phones values('iPhone 11 Pro Max 256GB','1125615000001',15,11799000,15,'gold',256)
insert into Phones values('iPhone 11 Pro Max 256GB','1125615000002',15,11799000,15,'gray',256)
insert into Phones values('iPhone 11 Pro Max 256GB','1112815000003',15,11799000,15,'green',256)




-- SAMSUNG S24 ULTRA
insert into Phones values('Samsung Galaxy S24 Ultra 256GB','S242561800001',18,31999000,10,'gray',256)
insert into Phones values('Samsung Galaxy S24 Ultra 256GB','S242561800002',18,31999000,10,'black',256)
insert into Phones values('Samsung Galaxy S24 Ultra 256GB','S242561800003',18,31999000,10,'purple',256)
insert into Phones values('Samsung Galaxy S24 Ultra 256GB','S242561800004',18,31999000,10,'gold',256)

insert into Phones values('Samsung Galaxy S24 Ultra 512GB','S245121900001',18,31999000,10,'gray',512)
insert into Phones values('Samsung Galaxy S24 Ultra 512GB','S245121900002',18,31999000,10,'black',512)
insert into Phones values('Samsung Galaxy S24 Ultra 512GB','S245121900003',18,31999000,10,'purple',512)
insert into Phones values('Samsung Galaxy S24 Ultra 512GB','S245121900004',18,31999000,10,'gold',512)

insert into Phones values('Samsung Galaxy S24 Ultra 1TB','S240011900001',18,31999000,10,'gray',1024)
insert into Phones values('Samsung Galaxy S24 Ultra 1TB','S240011900002',18,31999000,10,'black',1024)
insert into Phones values('Samsung Galaxy S24 Ultra 1TB','S240011900003',18,31999000,10,'purple',1024)
insert into Phones values('Samsung Galaxy S24 Ultra 1TB','S240011900004',18,31999000,10,'gold',1024)
-- SAMSUNG S23 ULTRA 12GB
insert into Phones values('Samsung Galaxy S23 Ultra 512GB','S235122900001',21,36990000,10,'green',512)
insert into Phones values('Samsung Galaxy S23 Ultra 512GB','S235122900002',21,36990000,10,'purple',512)
insert into Phones values('Samsung Galaxy S23 Ultra 512GB','S235122900003',21,36990000,10,'cream',512)
insert into Phones values('Samsung Galaxy S23 Ultra 512GB','S235122900003',21,36990000,10,'black',512)
--OPPO Find N3
insert into Phones values('OPPO Find N3 5G 512GB','FN35125800001',52,44990000,10,'yellow',512)
insert into Phones values('OPPO Find N3 5G 512GB','FN35125800002',52,44990000,10,'black',512)
-- OPPO Find N3 Flip
insert into Phones values('OPPO Find N3 Flip 5G 256GB','FN3F256570001',53,22990000,10,'pink',256)
insert into Phones values('OPPO Find N3 Flip 5G 256GB','FN3F256570002',53,22990000,10,'black',256)
insert into Phones values('OPPO Find N3 Flip 5G 256GB','FN3F256570003',53,22990000,10,'yellow',256)

-- XIAOMI 13T PRO 5G
insert into Phones values('Xiaomi 13T Pro 5G 256GB','13T2563100001',67,15990000,10,'blue',256)
insert into Phones values('Xiaomi 13T Pro 5G 256GB','13T2563100002',67,15990000,10,'black',256)
insert into Phones values('Xiaomi 13T Pro 5G 256GB','13T2563100003',67,15990000,10,'green',256)
-- VIVO V27E
insert into Phones values('Vivo V27e 256GB','VV27E25644001',45,8990000,10,'black',256)
insert into Phones values('Vivo V27e 256GB','VV27E25644002',45,8990000,10,'purple',256)
-- VIVO V29E 12GB
insert into Phones values('Vivo V29e 12GB 256GB','VV29E25644121',41,9990000,10,'black',256)
insert into Phones values('Vivo V29e 12GB 256GB','VV29E25644122',41,9990000,10,'blue',256)

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
insert into Images values(148,'["iphone-11-pro-max-gold.jpg","iphone-11-pro-max-gold-1.jpg", "iphone-11-pro-max-gold-2.jpg", "iphone-11-pro-max-gold-3.jpg"]', 1)
insert into Images values(249,'["iphone-11-pro-max-gray.jpg","iphone-11-pro-max-gray-1.jpg", "iphone-11-pro-max-gray-2.jpg", "iphone-11-pro-max-gray-3.jpg"]', 1)
insert into Images values(250,'["iphone-11-pro-max-green.jpg","iphone-11-pro-max-green-1.jpg", "iphone-11-pro-max-green-2.jpg", "iphone-11-pro-max-green-3.jpg"]', 1)
insert into Images values(251,'["iphone-11-pro-max-gold.jpg","iphone-11-pro-max-gold-1.jpg", "iphone-11-pro-max-gold-2.jpg", "iphone-11-pro-max-gold-3.jpg"]', 1)
insert into Images values(252,'["iphone-11-pro-max-gray.jpg","iphone-11-pro-max-gray-1.jpg", "iphone-11-pro-max-gray-2.jpg", "iphone-11-pro-max-gray-3.jpg"]', 1)
insert into Images values(253,'["iphone-11-pro-max-green.jpg","iphone-11-pro-max-green-1.jpg", "iphone-11-pro-max-green-2.jpg", "iphone-11-pro-max-green-3.jpg"]', 1)