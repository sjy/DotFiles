parse_git_branch() {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}

# phabricator settings
export CLICOLOR=1
export PIP_REQUIRE_VIRTUALENV=false
export LDFLAGS="-L$(brew --prefix openssl)/lib"
export CFLAGS="-I$(brew --prefix openssl)/include"
export SWIG_FEATURES="-cpperraswarn -includeall -I$(brew --prefix openssl)/include"
export BOTO_CONFIG="~/.boto"

# android settings
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools

alias hpm="npm --registry=https://tnt.kezaihui.com"
alias cnpm="npm --registry=https://registry.npm.taobao.org --cache=$HOME/.npm/.cache/cnpm --disturl=https://npm.taobao.org/dist --userconfig=$HOME/.cnpmrc"

alias gpr="git pull --rebase"
alias nb="npm run build"

alias dict="~/Github/Command-Line-Youdao-Dictionary/dict"
alias typora="open -a typora"
