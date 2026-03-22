# Starts each runnable site variant in its own terminal window.
# Default ports (see each app's vite.config.ts): Lovable 5173, Bolt 5174.
# If a port is busy, Vite picks the next free port — check the terminal URL.

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path $PSScriptRoot -Parent

$sites = @(
    @{ Name = "Lovable"; Path = Join-Path $repoRoot "apps\\lovable"; Url = "http://localhost:5173" },
    @{ Name = "Bolt"; Path = Join-Path $repoRoot "apps\\bolt"; Url = "http://localhost:5174" }
)

foreach ($site in $sites) {
    if (-not (Test-Path $site.Path)) {
        Write-Warning "Skip $($site.Name): path not found: $($site.Path)"
        continue
    }

    $cmd = "Set-Location '$($site.Path)'; if (-not (Test-Path node_modules)) { npm install }; Write-Host '$($site.Name) -> $($site.Url)' -ForegroundColor Cyan; npm run dev"
    Start-Process pwsh -ArgumentList "-NoExit", "-Command", $cmd
}

Write-Host "Opened $($sites.Count) dev server window(s)." -ForegroundColor Green
