Add-Type -AssemblyName System.Drawing

$width = 1200
$height = 630
$bmp = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($bmp)

$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

# Background Gradient
$rect = New-Object System.Drawing.Rectangle(0, 0, $width, $height)
$cTopLeft = [System.Drawing.Color]::FromArgb(255, 10, 15, 30) # #0A0F1E
$cBottomRight = [System.Drawing.Color]::FromArgb(255, 24, 24, 60) # #18183C
$bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $cTopLeft, $cBottomRight, 45.0)
$g.FillRectangle($bgBrush, $rect)

# Ambient glow circles
$glowBrush1 = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(35, 37, 99, 235)) # Blue
$g.FillEllipse($glowBrush1, 750, -80, 520, 520)

$glowBrush2 = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(30, 124, 58, 237)) # Purple
$g.FillEllipse($glowBrush2, -100, 260, 480, 480)

$glowBrush3 = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(20, 79, 70, 229)) # Indigo
$g.FillEllipse($glowBrush3, 400, 150, 420, 420)

# Card inner border
$borderPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(45, 255, 255, 255), 1.5)
$g.DrawRectangle($borderPen, 24, 24, $width - 48, $height - 48)

# Helper rounded rectangle
function FillRoundRect($graphics, $brush, $x, $y, $w, $h, $r) {
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $d = $r * 2
    $path.AddArc($x, $y, $d, $d, 180, 90)
    $path.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
    $path.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
    $path.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
    $path.CloseFigure()
    $graphics.FillPath($brush, $path)
}
function DrawRoundRect($graphics, $pen, $x, $y, $w, $h, $r) {
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $d = $r * 2
    $path.AddArc($x, $y, $d, $d, 180, 90)
    $path.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
    $path.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
    $path.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
    $path.CloseFigure()
    $graphics.DrawPath($pen, $path)
}

# Top Left Tag Pill
$tagBgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(200, 30, 41, 69))
$tagBorderPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(120, 99, 102, 241), 1.5)
FillRoundRect $g $tagBgBrush 70 55 350 38 12
DrawRoundRect $g $tagBorderPen 70 55 350 38 12

$tagFont = New-Object System.Drawing.Font("Segoe UI", 11, [System.Drawing.FontStyle]::Bold)
$tagTextBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 165, 180, 252))
$g.DrawString("★  NEN TANG B2B SAAS CRM 2026", $tagFont, $tagTextBrush, 85, 63)

# Top Right Domain Pill
$domainBgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(180, 15, 23, 42))
FillRoundRect $g $domainBgBrush ($width - 450) 55 380 38 12
DrawRoundRect $g $tagBorderPen ($width - 450) 55 380 38 12
$domainFont = New-Object System.Drawing.Font("Segoe UI", 10.5, [System.Drawing.FontStyle]::Bold)
$domainBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 203, 213, 225))
$g.DrawString("gioi-thieu-web-app-crm-b8qt.vercel.app", $domainFont, $domainBrush, ($width - 435), 64)

# Logo Icon
$logoRect = New-Object System.Drawing.Rectangle(70, 130, 76, 76)
$logoBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($logoRect, [System.Drawing.Color]::FromArgb(255, 37, 99, 235), [System.Drawing.Color]::FromArgb(255, 124, 58, 237), 45.0)
$g.FillEllipse($logoBrush, $logoRect)
$logoBorderPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(180, 255, 255, 255), 2.5)
$g.DrawEllipse($logoBorderPen, 72, 132, 72, 72)

# Logo Inner Arc & Node
$innerLogoPen = New-Object System.Drawing.Pen([System.Drawing.Color]::White, 4.0)
$g.DrawArc($innerLogoPen, 88, 148, 40, 40, 45, 270)
$dotBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 253, 224, 71)) # Amber
$g.FillEllipse($dotBrush, 103, 163, 11, 11)

# Brand Text Title
$brandFont = New-Object System.Drawing.Font("Segoe UI", 38, [System.Drawing.FontStyle]::Bold)
$brandBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$g.DrawString("Web App CRM", $brandFont, $brandBrush, 162, 132)

# Main Title Line 1
$titleFont = New-Object System.Drawing.Font("Segoe UI", 38, [System.Drawing.FontStyle]::Bold)
$g.DrawString("Quản trị Khách hàng B2B Chuyên sâu", $titleFont, $brandBrush, 70, 225)

# Main Title Line 2
$subTitleBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 129, 140, 248))
$g.DrawString("Tích hợp Trợ lý AI có Nhân viên Kiểm soát", $titleFont, $subTitleBrush, 70, 292)

# Subtitle / Description
$descFont = New-Object System.Drawing.Font("Segoe UI", 15.5, [System.Drawing.FontStyle]::Regular)
$descBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 203, 213, 225))
$descText = "Chuẩn hóa phễu 6 bước • Customer 360 • Mặt nạ Zero-Phone • Bảo mật Luật 91/2025/QH15"
$g.DrawString($descText, $descFont, $descBrush, 70, 375)

# 4 Feature Badges at bottom
$badges = @(
    "Phễu Bán Hàng 6 Bước",
    "Trợ Lý AI Snapshot",
    "Mặt Nạ Số Zero-Phone",
    "Cam Kết SLA ≤ 5 Phút"
)

$subs = @(
    "Kanban & KPI trực quan",
    "Tóm tắt cuộc gọi chuẩn xác",
    "Bảo vệ tài sản dữ liệu",
    "Triển khai xong trong 48h"
)

$bX = 70
$bY = 445
$bW = 250
$bH = 80
$bGap = 20

$bBgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(190, 24, 32, 52))
$bBorderPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(100, 129, 140, 248), 1.5)
$bTitleFont = New-Object System.Drawing.Font("Segoe UI", 12, [System.Drawing.FontStyle]::Bold)
$bTitleBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$bSubFont = New-Object System.Drawing.Font("Segoe UI", 9.5, [System.Drawing.FontStyle]::Regular)
$bSubBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 148, 163, 184))
$checkBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 52, 211, 153)) # Emerald

for ($i = 0; $i -lt 4; $i++) {
    $curX = $bX + ($i * ($bW + $bGap))
    FillRoundRect $g $bBgBrush $curX $bY $bW $bH 14
    DrawRoundRect $g $bBorderPen $curX $bY $bW $bH 14
    $g.DrawString("✓", $bTitleFont, $checkBrush, ($curX + 14), ($bY + 16))
    $g.DrawString($badges[$i], $bTitleFont, $bTitleBrush, ($curX + 34), ($bY + 16))
    $g.DrawString($subs[$i], $bSubFont, $bSubBrush, ($curX + 34), ($bY + 44))
}

# Footer copyright line
$footFont = New-Object System.Drawing.Font("Segoe UI", 9.5, [System.Drawing.FontStyle]::Regular)
$footBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 148, 163, 184))
$g.DrawString("© 2026 Web App CRM SaaS Platform • 100% CRM B2B Độc lập • Tối ưu chia sẻ Zalo & Facebook", $footFont, $footBrush, 70, 560)

# Save to public/og-image.png
$outputPath = Join-Path (Get-Location) "public\og-image.png"
$bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()
Write-Host "SUCCESS: Generated $outputPath ($width x $height)"
