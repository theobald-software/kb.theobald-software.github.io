param(
    [Parameter(Position=0,Mandatory=$true)]
    [String]
    $oldthumbprint,
    [Parameter(Position=1,Mandatory=$true)]
    [String]
    $newthumbprint
    )

$tls_config="C:\Program Files\Theobald Software\yunIO\config\servers\tls.json"

Copy-Item "${tls_config}" "${tls_config}.bak"
(Get-Content "${tls_config}" -Raw) -Replace "$oldthumbprint","$newthumbprint" | Set-Content "${tls_config}"

# Restart-Service -DisplayName "yunio"