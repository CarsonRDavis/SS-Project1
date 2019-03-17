class SayController < ApplicationController
  def hello
    @time = Time.now
  end

  def goodbye
  end

  def filenames
    @files = Dir.glob('*')
  end
end
