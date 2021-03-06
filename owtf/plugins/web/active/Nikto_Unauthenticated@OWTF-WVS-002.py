"""
ACTIVE Plugin for Unauthenticated Nikto testing
This will perform a "low-hanging-fruit" pass on the web app for easy to find (tool-findable) vulns
"""

from owtf.dependency_management.dependency_resolver import ServiceLocator


DESCRIPTION = "Active Vulnerability Scanning without credentials via nikto"


def run(PluginInfo):
    plugin_helper = ServiceLocator.get_component("plugin_helper")
    resource = ServiceLocator.get_component("resource")
    NiktoOutput = plugin_helper.CommandDump('Test Command', 'Output', resource.get_resources('Nikto_Unauth'),
                                            PluginInfo, [])
    Content = plugin_helper.CommandDump('Test Command', 'Output', resource.get_resources('Nikto_Verify_Unauth'),
                                        PluginInfo, NiktoOutput)
    return Content + NiktoOutput  # Show Nikto Verify FIRST (more useful, with links to findings, etc)
