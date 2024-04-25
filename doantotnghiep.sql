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
DBCC CHECKIDENT ('DB_DoAnTotNghiep.dbo.Phoness', RESEED, 0);
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
								tìm kiếm một chiếc điện thoại có hiệu năng mạnh mẽ, camera chất lượng và thiết kế sang trọng.', 8,1, 'iOS 17', N'Apple A17 Pro 6 nhân', '4422 mAh, 20 W','iphone-15-pro-max-titan-white.jpg',1,1 );
insert into ModPhones values(  'IPhone 15 Pro', 6.1, N'iPhone 15 Pro là một trong những chiếc điện thoại thông minh được mong đợi nhất năm 2023. Với nhiều 
								tính năng mới và cải tiến, iPhone 15 Pro chắc chắn sẽ là một lựa chọn tuyệt vời cho những người dùng đang tìm kiếm một chiếc 
								điện thoại cao cấp.', 8,1, 'iOS 17', N'Apple A17 Pro 6 nhân', '3274 mAh, 20 W','iphone-15-pro-titan-white.jpg',1,1 );
insert into ModPhones values(  'IPhone 15 Plus', 6.7, N'iPhone 15 Plus thu hút mọi ánh nhìn ngay khi ra mắt nhờ có vẻ ngoài cao cấp, 
								trang bị bộ xử lý mạnh mẽ, cụm camera kép đặc trưng cho khả năng chụp ảnh cực nét cùng màn hình chất lượng cao, 
								để bạn tận hưởng trải nghiệm sử dụng tuyệt vời. ', 8,1, 'iOS 17', N'Apple A16 Bionic', '4383 mAh, 20 W','iphone-15-plus-green.jpg',1,1 );
insert into ModPhones values(  'IPhone 15 ', 6.1, N'iPhone 15 128GB là mẫu điện thoại cao cấp được Apple cho ra mắt vào tháng 09/2023, 
								máy nhận được nhiều sự chú ý đến từ người dùng khi mang trong mình bộ cấu hình cực khủng, vẻ ngoài thu hút
								cùng khả năng quay video - chụp ảnh đỉnh cao.', 8,1, 'iOS 17', N'Apple A16 Bionic', '3349 mAh, 20 W','iphone-15-pink.jpg',1,1 );
insert into ModPhones values(  'IPhone 14 Promax ', 6.7, N'iPhone 14 Pro Max một siêu phẩm trong giới smartphone được nhà Táo tung ra thị trường vào tháng 09/2022. 
								Máy trang bị con chip Apple A16 Bionic vô cùng mạnh mẽ, đi kèm theo đó là thiết kế màn hình mới, hứa hẹn mang lại những trải 
								nghiệm đầy mới mẻ cho người dùng iPhone.', 8,1, 'iOS 16', N'Apple A16 Bionic', '4323 mAh, 20 W','iphone-14-pro-max-sliver.jpg',1,1 );
insert into ModPhones values(  'IPhone 14 Pro ', 6.7, N'iPhone 14 Pro Max một siêu phẩm trong giới smartphone được nhà Táo tung ra thị trường vào tháng 09/2022. 
								Máy trang bị con chip Apple A16 Bionic vô cùng mạnh mẽ, đi kèm theo đó là thiết kế màn hình mới, hứa hẹn mang lại những trải 
								nghiệm đầy mới mẻ cho người dùng iPhone.', 8,1, 'iOS 16', N'Apple A16 Bionic', '4323 mAh, 20 W','iphone-14-pro-gold.jpg',1,1 );
insert into ModPhones values(  'IPhone 14 Plus ', 6.7, N'Sau nhiều thế hệ điện thoại của Apple thì cái tên “Plus” cũng đã chính thức trở lại vào năm 2022 
								và xuất hiện trên chiếc iPhone 14 Plus 128GB, nổi trội với ngoại hình bắt trend cùng màn hình kích thước lớn để đem đến không gian 
								hiển thị tốt hơn cùng cấu hình mạnh mẽ không đổi so với bản tiêu chuẩn.', 6,1, 'iOS 16', N'Apple A15 Bionic', '4325 mAh, 20 W','iphone-14-plus-yellow.jpeg',1,1 );
insert into ModPhones values(  'IPhone 14', 6.1, N'iPhone 14 128GB được xem là mẫu smartphone bùng nổ của nhà táo trong năm 2022, ấn tượng với ngoại hình trẻ trung, màn hình chất 
								lượng đi kèm với những cải tiến về hệ điều hành và thuật toán xử lý hình ảnh, giúp máy trở thành cái tên thu hút được đông đảo người dùng quan tâm 
								tại thời điểm ra mắt.', 6,1, 'iOS 16', N'Apple A15 Bionic', '4379 mAh, 20 W','iphone-14-tim.jpg',1,1 );
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
								tới từ nhà Apple.', 4,1, 'iOS 14', N'Apple A13 Bionic', '3969 mAh, 20 W','iphone-11-pro-max-xanh-1.jpg',1,1 );
insert into ModPhones values(  'IPhone 11 Pro ', 5.8, N'Nếu như bây giờ để lựa chọn một thiết bị có thể sử dụng ổn định và được cập nhật trong khoảng 3 năm nữa
								thì không có sự lựa chọn nào xuất sắc hơn chiếc iPhone 11 Pro 64GB, siêu phẩm mới được giới thiệu cách đây không lâu tới từ Apple.', 4,1, 'iOS 14', N'Apple A13 Bionic', '3046 mAh, 20 W','iphone-11-pro-gold.png',1,1 );
insert into ModPhones values(  'IPhone 11', 6.1, N'Apple đã chính thức trình làng bộ 3 siêu phẩm iPhone 11, trong đó phiên bản iPhone 11 64GB có mức giá rẻ nhất nhưng vẫn
								được nâng cấp mạnh mẽ như iPhone Xr ra mắt trước đó.', 4,1, 'iOS 15', N'Apple A13 Bionic', '3110 mAh, 20 W','iphone-11-vang.png',1,1 );

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
insert into Phones values('iPhone 15 128GB','1512814000001',4,21299000,10,'black',128)
insert into Phones values('iPhone 15 128GB','1512814000002',4,21299000,10,'green',128)
insert into Phones values('iPhone 15 128GB','1512814000003',4,21299000,10,'pink',128)
insert into Phones values('iPhone 15 128GB','1512814000004',4,21299000,10,'blue',128)
insert into Phones values('iPhone 15 128GB','1512814000005',4,21299000,10,'yellow',128)

insert into Phones values('iPhone 15 256GB','1525614000001',4,24299000,10,'black',256)
insert into Phones values('iPhone 15 256GB','1525614000002',4,24299000,10,'green',256)
insert into Phones values('iPhone 15 256GB','1525614000003',4,24299000,10,'pink',256)
insert into Phones values('iPhone 15 256GB','1525614000004',4,24299000,10,'blue',256)
insert into Phones values('iPhone 15 256GB','1525614000005',4,24299000,10,'yellow',256)

insert into Phones values('iPhone 15 512GB','1551214000001',4,29399000,10,'black',512)
insert into Phones values('iPhone 15 512GB','1551214000002',4,29399000,10,'green',512)
insert into Phones values('iPhone 15 512GB','1551214000003',4,29399000,10,'pink',512)
insert into Phones values('iPhone 15 512GB','1551214000004',4,29399000,10,'blue',512)
insert into Phones values('iPhone 15 512GB','1551214000005',4,29399000,10,'yellow',512)

-- IPHONE 15 PLUS: 16 -> 30
insert into Phones values('iPhone 15 Plus 128GB','1512815000001',3,24299000,10,'pink',128)
insert into Phones values('iPhone 15 Plus 128GB','1512815000002',3,24299000,10,'green',128)
insert into Phones values('iPhone 15 Plus 128GB','1512815000003',3,24299000,10,'blue',128)
insert into Phones values('iPhone 15 Plus 128GB','1512815000004',3,24299000,10,'black',128)
insert into Phones values('iPhone 15 Plus 128GB','1512815000005',3,24299000,10,'yellow',128)

insert into Phones values('iPhone 15 Plus 256GB','1525615000001',3,25899000,10,'pink',256)
insert into Phones values('iPhone 15 Plus 256GB','1525615000002',3,25899000,10,'green',256)
insert into Phones values('iPhone 15 Plus 256GB','1525615000003',3,25899000,10,'blue',256)
insert into Phones values('iPhone 15 Plus 256GB','1525615000004',3,25899000,10,'black',256)
insert into Phones values('iPhone 15 Plus 256GB','1512815000005',3,24299000,10,'yellow',256)

insert into Phones values('iPhone 15 Plus 512GB','1551215000001',3,27899000,10,'pink',512)
insert into Phones values('iPhone 15 Plus 512GB','1551215000002',3,27899000,10,'green',512)
insert into Phones values('iPhone 15 Plus 512GB','1551215000003',3,27899000,10,'blue',512)
insert into Phones values('iPhone 15 Plus 512GB','1551215000004',3,27899000,10,'black',512)
insert into Phones values('iPhone 15 Plus 512GB','1512815000005',3,27899000,10,'yellow',512)
--IPHONE 15 PRO: 31 -> 46
insert into Phones values('iPhone 15 Pro 128GB','1512816000001',2,26799000,10,'black',128)
insert into Phones values('iPhone 15 Pro 128GB','1512816000002',2,26799000,10,'white',128)
insert into Phones values('iPhone 15 Pro 128GB','1512816000003',2,26799000,10,'blue',128)
insert into Phones values('iPhone 15 Pro 128GB','1512816000004',2,26799000,10,'natural',128)

insert into Phones values('iPhone 15 Pro 256GB','1525616000001',2,29499000,10,'black',256)
insert into Phones values('iPhone 15 Pro 256GB','1525616000002',2,29499000,10,'green',256)
insert into Phones values('iPhone 15 Pro 256GB','1525616000003',2,29499000,10,'blue',256)
insert into Phones values('iPhone 15 Pro 256GB','1525616000004',2,29499000,10,'natural',256)

insert into Phones values('iPhone 15 Pro 512B','1551216000001',2,35899000,10,'black',512)
insert into Phones values('iPhone 15 Pro 512B','1551216000002',2,35899000,10,'white',512)
insert into Phones values('iPhone 15 Pro 512B','1551216000003',2,35899000,10,'blue',512)
insert into Phones values('iPhone 15 Pro 512B','1551216000004',2,35899000,10,'natural',512)

insert into Phones values('iPhone 15 Pro 1TB','1500116000001',2,39499000,10,'black',1024)
insert into Phones values('iPhone 15 Pro 1TB','1500116000002',2,39499000,10,'white',1024)
insert into Phones values('iPhone 15 Pro 1TB','1500116000003',2,39499000,10,'blue',1024)
insert into Phones values('iPhone 15 Pro 1TB','1500116000004',2,39499000,10,'natural',1024)
--IPHONE 15 PRO MAX: 47 ->  58
insert into Phones values('iPhone 15 Pro Max 256GB','1525617000001',1,31999000,10,'black',256)
insert into Phones values('iPhone 15 Pro Max 256GB','1525617000002',1,31999000,10,'white',256)
insert into Phones values('iPhone 15 Pro Max 256GB','1525617000003',1,31999000,10,'blue',256)
insert into Phones values('iPhone 15 Pro Max 256GB','1525617000004',1,31999000,10,'natural',256)

insert into Phones values('iPhone 15 Pro Max 512B','1551217000001',1,37699000,10,'black',512)
insert into Phones values('iPhone 15 Pro Max 512B','1551217000002',1,37699000,10,'white',512)
insert into Phones values('iPhone 15 Pro Max 512B','1551217000003',1,37699000,10,'blue',512)
insert into Phones values('iPhone 15 Pro Max 512B','1551217000004',1,37699000,10,'natural',512)

insert into Phones values('iPhone 15 Pro Max 1TB','1500117000001',1,43499000,10,'black',1024)
insert into Phones values('iPhone 15 Pro Max 1TB','1500117000002',1,43499000,10,'white',1024)
insert into Phones values('iPhone 15 Pro Max 1TB','1500117000003',1,43499000,10,'blue',1024)
insert into Phones values('iPhone 15 Pro Max 1TB','1500117000004',1,43499000,10,'natural',1024)


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
insert into Images values(16, '["iphone-15-plus-black.jpg", "iphone-15-plus-black-1.jpg", "iphone-15-plus-black-2.jpg", "iphone-15-plus-black-3.jpg"]', 1)
insert into Images values(17, '["iphone-15-plus-green.jpg", "iphone-15-plus-green-1.jpg", "iphone-15-plus-green-2.jpg", "iphone-15-plus-green-3.jpg"]', 1)
insert into Images values(18, '["iphone-15-plus-pink.jpg", "iphone-15-plus-pink-1.jpg", "iphone-15-plus-pink-2.jpg", "iphone-15-plus-pink-3.jpg"]', 1)
insert into Images values(19, '["iphone-15-plus-blue.jpg", "iphone-15-plus-blue-1.jpg", "iphone-15-plus-blue-2.jpg", "iphone-15-plus-blue-3.jpg"]', 1)
insert into Images values(20, '["iphone-15-plus-yellow.jpg", "iphone-15-yellow-1.jpg", "iphone-15-plus-yellow-2.jpg", "iphone-15-plus-yellow-3.jpg"]', 1)
--256GB
insert into Images values(21, '["iphone-15-plus-black.jpg", "iphone-15-plus-black-1.jpg", "iphone-15-plus-black-2.jpg", "iphone-15-plus-black-3.jpg"]', 1)
insert into Images values(22, '["iphone-15-plus-green.jpg", "iphone-15-plus-green-1.jpg", "iphone-15-plus-green-2.jpg", "iphone-15-plus-green-3.jpg"]', 1)
insert into Images values(23, '["iphone-15-plus-pink.jpg", "iphone-15-plus-pink-1.jpg", "iphone-15-plus-pink-2.jpg", "iphone-15-plus-pink-3.jpg"]', 1)
insert into Images values(24, '["iphone-15-plus-blue.jpg", "iphone-15-plus-blue-1.jpg", "iphone-15-plus-blue-2.jpg", "iphone-15-plus-blue-3.jpg"]', 1)
insert into Images values(25,'["iphone-15-plus-yellow.jpg", "iphone-15-plus-yellow-1.jpg", "iphone-15-plus-yellow-2.jpg", "iphone-15-plus-yellow-3.jpg"]', 1)
--512GB
insert into Images values(26,'["iphone-15-plus-black.jpg", "iphone-15-plus-black-1.jpg", "iphone-15-plus-black-2.jpg", "iphone-15-plus-black-3.jpg"]', 1)
insert into Images values(27,'["iphone-15-plus-green.jpg", "iphone-15-plus-green-1.jpg", "iphone-15-plus-green-2.jpg", "iphone-15-plus-green-3.jpg"]', 1)
insert into Images values(28,'["iphone-15-plus-pink.jpg", "iphone-15-plus-pink-1.jpg", "iphone-15-plus-pink-2.jpg", "iphone-15-plus-pink-3.jpg"]', 1)
insert into Images values(29,'["iphone-15-plus-blue.jpg", "iphone-15-plus-blue-1.jpg", "iphone-15-plus-blue-2.jpg", "iphone-15-plus-blue-3.jpg"]', 1)
insert into Images values(30,'["iphone-15-plus-yellow.jpg", "iphone-15-plus-yellow-1.jpg", "iphone-15-plus-yellow-2.jpg", "iphone-15-plus-yellow-3.jpg"]', 1)
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