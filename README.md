# Wrr

This library uses playwright-ruby-client to automate filling out a FAA
[WRR]https://usfaa.sharepoint.com/sites/EOSH-PM/_layouts/15/FormServer.aspx?XsnLocation=https%3a//usfaa.sharepoint.com/sites/EOSH-PM/WRR/Forms/template.xsn&SaveLocation=https%3a//usfaa.sharepoint.com/sites/EOSH-PM/WRR&ClientInstalled=true&DefaultItemOpen=1&Source=https%3a//ksn2.faa.gov/ajw/Home/wsa/techsvcs/tsog/SitePages/w22n.aspx


## Installation

Install the gem and add to the application's Gemfile by executing:

    $ bundle add wrr

If bundler is not being used to manage dependencies, install the gem by executing:

    $ gem install wrr

## Usage

wrr --jcn=12345

or

wrr --json=project.json

or wrr --yaml=project.yaml

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run
`rake test` to run the tests. You can also run `bin/console` for an interactive
prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To
release a new version, update the version number in `version.rb`, and then run
`bundle exec rake release`, which will create a git tag for the version, push
git commits and the created tag, and push the `.gem` file to
[rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at
https://github.com/[USERNAME]/wrr. This project is intended to be a safe,
welcoming space for collaboration, and contributors are expected to adhere to
the [code of
conduct](https://github.com/[USERNAME]/wrr/blob/master/CODE_OF_CONDUCT.md).

## License

The gem is available as open source under the terms of the [MIT
License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the Wrr project's codebases, issue trackers, chat rooms
and mailing lists is expected to follow the [code of
conduct](https://github.com/[USERNAME]/wrr/blob/master/CODE_OF_CONDUCT.md).
